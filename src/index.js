// import Example from "./scripts/example"
import WordLadder from "./scripts/word_ladder.js"
import Tree from "./scripts/tree.js"
import * as d3 from 'd3';
import radialTree from "./scripts/animated_tree.js";
import diyLadder from "./scripts/try_ladder.js";
// import * as d3 from "./scripts/d3-v3-min.js"

document.addEventListener("DOMContentLoaded", async () => {
    const response = await fetch('./src/dictionary.txt');
    const data = await response.text();
    // const dictionary = new Set(data.split("\n"));
    const dictionary = data.split("\n");
    const dictionarySet = new Set(dictionary);
    const dictionaryObj = {};
    for (let i = 0; i < dictionary.length; i++) {
        let sorted = dictionary[i].split("").sort();
        let anaArray = dictionaryObj[sorted];
        if (anaArray != undefined) {
            anaArray.push(dictionary[i]);
            dictionaryObj[sorted] = anaArray;
        } else {
            dictionaryObj[sorted] = [dictionary[i]];
        }
    }
    const ladderAnchor = document.getElementById("ladder").appendChild(document.createElement("a"));
    ladderAnchor.innerText = "Try making your own word ladder";
    ladderAnchor.addEventListener(
        'click', function(e) {
            e.preventDefault();
            diyLadder(dictionarySet,dictionaryObj);
        }, false
    );

    const form = document.querySelector("#ladder_input");
    form.addEventListener('submit', event => {
        event.preventDefault();
        const startWord = document.getElementById('startWord').value;
        const endWord = document.getElementById('endWord').value;
        const anagrams = document.querySelector('#anagrams').checked;
        const addRemove = document.querySelector('#addRemove').checked;
        try {
        let testLadderInput = new WordLadder(startWord,endWord,dictionary,dictionaryObj);
        let testLadderOutput = testLadderInput.shortestLadder(anagrams,addRemove);
        let testLadder = testLadderOutput[0];
        const startNode = testLadderOutput[1];
        // debugger

        


        const ul = document.getElementById("ladder").appendChild(document.createElement("ul"));
        ul.innerHTML = "";
        if (testLadder === undefined) {
            const li = document.createElement("li");
            li.textContent = 'We could not find a connection between these words in our dictionary.';
            ul.appendChild(li);
        } else {
            for (let i = 0; i < testLadder.length; i++) {
                let li = document.createElement("li");
                li.textContent = testLadder[i];
                ul.appendChild(li);
            }
        }

        var idQueue = [startNode];
        var currentNode = undefined;
        var treeId = 0;

        while (idQueue.length > 0) {
            currentNode = idQueue.shift();
            currentNode.id = treeId;
            treeId++;
            idQueue = idQueue.concat(currentNode.children)
            if (currentNode.word === endWord) currentNode.id = 999999999;
        }


        const chart = Tree(startNode, {
            label: d => d.word,
            title: (d, n) => `${n.ancestors().reverse().map(d => d.data.word).join(".")}`, // hover text
            link: (d, n) => `${n.ancestors().reverse().map(d => d.data.word).join(".")}`,
            width: 1152
        })






        
        // radialTree(startNode);
        
        document.getElementById("graph").innerHTML = "";
        document.getElementById("graph").appendChild(chart);


        
        const anchors = document.querySelectorAll('a')
        anchors.forEach(anchor => {
            
            anchor.addEventListener(
                'click', function(e) {
                    e.preventDefault();
                    console.log(e.currentTarget.href.baseVal)
                    const ladder = e.currentTarget.href.baseVal.split(".")
                    const ul = document.querySelector("ul");
                    ul.innerHTML = "";
                    for (let i = 0; i < ladder.length; i++) {
                        let li = document.createElement("li");
                        li.textContent = ladder[i];
                        ul.appendChild(li);
                    }

                
                
                }, false
            );
        })
        }
        catch(err) { 
            document.getElementById("graph").innerHTML = err.message;
        }

        });


    
    window.dictionary = dictionary;
    window.dictionaryObj = dictionaryObj;
    window.WordLadder = WordLadder;
    // window.startNode = startNode;
    // window.chart = chart;
    
})
