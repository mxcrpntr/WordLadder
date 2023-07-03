import Example from "./scripts/example"
import WordLadder from "./scripts/word_ladder"
import Tree from "./scripts/tree"

document.addEventListener("DOMContentLoaded", async () => {
    const response = await fetch('./src/dictionary.txt');
    const data = await response.text();
    // const dictionary = new Set(data.split("\n"));
    const dictionary = data.split("\n");
    const dictionaryObj = {};
    for (let i = 0; i < dictionary.length; i++) {
        let sorted = dictionary[i].split("").sort();
        let anaArray = dictionaryObj[sorted];
        if (anaArray != undefined) {
            // debugger
            anaArray.push(dictionary[i]);
            dictionaryObj[sorted] = anaArray;
        } else {
            dictionaryObj[sorted] = [dictionary[i]];
        }
    }
    const form = document.querySelector("form");
    form.addEventListener('submit', event => {
        event.preventDefault();
        const startWord = document.getElementById('startWord').value;
        console.log(startWord);
        const endWord = document.getElementById('endWord').value;
        console.log(endWord);
        const anagrams = document.getElementById('anagrams').value;
        console.log(anagrams);
        const addRemove = document.getElementById('addRemove').value ? true : false;
        console.log(addRemove);
        let testLadderInput = new WordLadder(startWord,endWord,dictionary,dictionaryObj);
        let testLadderOutput = testLadderInput.shortestLadder(anagrams,addRemove);
        let testLadder = testLadderOutput[0];
        let startNode = testLadderOutput[1];
        const ul = document.querySelector("ul");
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
        const chart = Tree(startNode, {
            label: d => d.word,
            title: (d, n) => `${n.ancestors().reverse().map(d => d.data.word).join(".")}`, // hover text
            link: (d, n) => "",
            width: 1152
        })
        document.getElementById("graph").innerHTML = "";
        document.getElementById("graph").appendChild(chart);
    });
    
    window.dictionary = dictionary;
    window.dictionaryObj = dictionaryObj;
    window.WordLadder = WordLadder;
    window.chart = chart;
    
})
