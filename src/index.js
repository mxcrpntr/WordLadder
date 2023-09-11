// import Example from "./scripts/example"
import WordLadder from "./scripts/word_ladder.js"
import Tree from "./scripts/tree.js"
import * as d3 from 'd3';
import radialTree from "./scripts/animated_tree.js";
import diyLadder from "./scripts/try_ladder.js";
import animateTree from "./scripts/animated.js";
// import * as d3 from "./scripts/d3-v3-min.js"

document.addEventListener("DOMContentLoaded", async () => {
    const response = await fetch('./src/dictionary.txt');
    const data = await response.text();
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
    const diyButton = document.getElementById("diyLadder");
    diyButton.addEventListener(
        'click', function(e) {
            e.preventDefault();
            toggleHideDiv("input");
            toggleHideDiv("ladder");
            
            diyLadder(dictionarySet,dictionaryObj);
        }, false
    );

    const info = document.getElementById("info")

    info.addEventListener("click", function(e) {
        e.stopPropagation();
    }, false)
    
    document.getElementById("main").addEventListener("click", function(e) {
        if (info.classList.contains("showing")) {
            toggleHideDiv("info");
            toggleHideDiv("xAnchor");
            document.getElementById("animation").style.height = "25px";
        }
    }, false)
    const infoAnchor = document.getElementById("infoAnchor");
    infoAnchor.addEventListener(
        'click', function(e) {
            e.preventDefault();
            toggleHideDiv("info");
            toggleHideDiv("xAnchor");
            if (info.classList.contains("showing")) {
                info.scrollTop = 0;
                document.getElementById("animation").innerHTML = "";
                animateTree();
            }
        }, false
    );
    
    const closeAnchor = document.getElementById("close");
    const xAnchor = document.getElementById("xAnchor")
    closeAnchor.addEventListener(
        'click', function(e) {
            e.preventDefault();
            document.getElementById("animation").style.transition = "none";
            document.getElementById("animation").style.height = "25px";
            document.getElementById("animation").style.transition = "height 2s";
            toggleHideDiv("info");
            toggleHideDiv("xAnchor");
        }, false
    );
    xAnchor.addEventListener(
        'click', function(e) {
            e.preventDefault();
            document.getElementById("animation").style.transition = "none";
            document.getElementById("animation").style.height = "25px";
            document.getElementById("animation").style.transition = "height 2s";
            toggleHideDiv("info");
            toggleHideDiv("xAnchor");

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
        const appendedChart = document.getElementById("graph").appendChild(chart);

        let ladderPopUpText = ""
        if (testLadder) {
            ladderPopUpText = `The shortest ladder we could find is:\n\n${testLadder.join('\n↓\n')}\n\n Would you like to explore the word tree graph that led us to this ladder?`;
        } else {
            ladderPopUpText = `We were unable to find a ladder connecting "${startWord}" to "${endWord}." Would you like to explore the word tree graph that we created in our search?`;
        }

        document.querySelector("#ladderPopUp > p").innerText = ladderPopUpText

        toggleHideDiv("ladderPopUp")

        const yesAnchor = document.querySelector("#ladderPopUp > div > a:first-child")
        const noAnchor = document.querySelector("#ladderPopUp > div > a:last-child")

        const yesAnchorFunction = (e) => {
            e.preventDefault();
            toggleHideDiv("input");
            toggleHideDiv("graph");
            toggleHideDiv("ladderPopUp");
    
            const returnDiv = document.getElementById("main").appendChild(document.createElement("div"))
            returnDiv.setAttribute("id","return");
            const returnAnchor = document.createElement("a");
            returnAnchor.innerText = "return to the previous form";
            returnDiv.appendChild(returnAnchor);
    
            const returnListener = (e) => {
                e.preventDefault();
                let currentLadderDiv = document.getElementById("currentLadder")
                if (currentLadderDiv) {
                    currentLadderDiv.innerHTML = "";
                }
                toggleHideDiv("graph");
                toggleHideDiv("input");
                returnAnchor.removeEventListener('click', returnListener)
                returnDiv.remove();
            }

            returnAnchor.addEventListener('click', returnListener, false);
    
            if (testLadder) {
                const lastNodeText = document.getElementById(testLadder.join(".")).getElementsByTagName("text")[0];
                lastNodeText.classList.add("shortLadder");
                lastNodeText.scrollIntoView();
    
                var shrinkingLadder = [...testLadder];
    
                while (shrinkingLadder.length > 1) {
                    shrinkingLadder.pop();
                    var rungNodeText = document.getElementById(shrinkingLadder.join(".")).getElementsByTagName("text")[0];
                    rungNodeText.classList.add("shortLadder");
                }
            }   
            if (document.querySelector("#currentLadder")) {
                document.querySelector("#currentLadder").remove();
            }
            const currentLadderDiv = document.querySelector('#main').appendChild(document.createElement("div"));
            currentLadderDiv.setAttribute("id","currentLadder");
            if (testLadder) {
                currentLadderDiv.appendChild(document.createElement("h4")).innerText = testLadder.join(" => ");
            } else {
                var unfoundMessage = `No ladder found. Explore our search tree below.`;
                currentLadderDiv.appendChild(document.createElement("h4")).innerText = unfoundMessage;
            }
    
            const anchors = document.querySelector('#graph').querySelectorAll('a')
            anchors.forEach(anchor => {
                
                anchor.addEventListener(
                    'click', function(e) {
                        e.preventDefault();
                        const ladder = e.currentTarget.href.baseVal.split(".").join(" => ")
                        // const ul = document.createElement("ul");
                        currentLadderDiv.innerHTML = "";
                        currentLadderDiv.appendChild(document.createElement("h4")).innerText = ladder;
                    
                    
                    }, false
                );
            })
            yesAnchor.removeEventListener('click', yesAnchorFunction)
        }

        yesAnchor.addEventListener('click', yesAnchorFunction, false)
        const noAnchorFunction = (e) => {
            e.preventDefault();

            toggleHideDiv("ladderPopUp");
            noAnchor.removeEventListener('click', noAnchorFunction)
        }
        noAnchor.addEventListener('click', noAnchorFunction, false)
        }
        catch(err) { 
            var popUp = document.getElementById("popup");
            popUp.innerHTML = err.message;
            popUp.appendChild(document.createElement("br"));

            var closeAnchorTwo = document.createElement("a");
            closeAnchorTwo.innerText = "(close)";
            popUp.appendChild(closeAnchorTwo);

            closeAnchorTwo.addEventListener(
                'click', function(e) {
                    e.preventDefault();
                    toggleHideDiv("popup");
                    popUp.innerHTML = "";
                }, false
            );

            toggleHideDiv("popup");
        }

        });

        const textInputs = document.querySelectorAll('input[type=text]')
        textInputs.forEach(input => {
            
            input.addEventListener(
                'click', function(e) {
                    // e.preventDefault();
                    if (!input.classList.contains("clicked")) {
                        var holder = input.value;
                        input.value = "";
                        input.classList.add("clicked");
                            
                        document.addEventListener(
                            'click', function(e) {
                                // e.preventDefault();
                                if (e.target != input && input.value === "") {
                                    input.classList.remove("clicked")
                                    input.value = holder;
                                }
                            
                            }, false
                        )
                    }
                
                }, false
            );
        })
    
    window.dictionary = dictionary;
    window.dictionaryObj = dictionaryObj;
    window.WordLadder = WordLadder;
    // window.startNode = startNode;
    // window.chart = chart;


    function toggleHideDiv(divString) {
        var x = document.getElementById(divString);
        // debugger
        if (x.classList.contains("hidden")) {
            x.classList.remove("hidden")
            x.classList.add("showing")
        } else {
            x.classList.remove("showing")
            x.classList.add("hidden")
        }
    }

    
})
