import WordNode from "./word_node";
import WordLadder from "./word_ladder";

export default function diyLadder(dictionarySet,dictionaryObj) {
    
const ladderBox = document.getElementById("ladder");
ladderBox.innerHTML = "";

const form = ladderBox.appendChild(document.createElement("form"));

var input = document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("value","Enter a word");
var newLabel = document.createElement("label");
newLabel.appendChild(input)
form.appendChild(newLabel);

var addButton = document.createElement("input");
addButton.setAttribute("type","button");
addButton.setAttribute("value","Add another word");
newLabel = document.createElement("label");
newLabel.appendChild(addButton)
form.appendChild(newLabel);

var submit = document.createElement("input");
submit.setAttribute("type","submit");
submit.setAttribute("value","See how your ladder stacks up");
newLabel = document.createElement("label");
newLabel.appendChild(submit);
form.appendChild(newLabel);

clickClear();
addButton.addEventListener('click', event => {
    event.preventDefault();
    var anotherInput = document.createElement("input");
    anotherInput.setAttribute("type","text");
    anotherInput.setAttribute("value","Enter another word");
    var innerNewLabel = document.createElement("label");
    innerNewLabel.appendChild(anotherInput);
    form.insertBefore(innerNewLabel,addButton.parentElement)
    clickClear();
})
form.addEventListener('submit', event => {
    event.preventDefault();
    const inputs = form.querySelectorAll("input");
    console.log(inputs)
    const inputValues = [];
    for (let i = 0; i < inputs.length - 2; i++) {
        inputValues.push(inputs[i].value);
    }
    console.log(inputValues);
    var previousWord = undefined;
    let anagrams = false;
    let addRemove = false;
    for (let i = 0; i < inputValues.length; i++) {
        let ladderWord = inputValues[i].toLowerCase()
        if (!dictionarySet.has(ladderWord)) {
            cleanUpMessage(`Sorry, ${inputValues[i]} is not in our dictionary at the present time.`);
            break
        } else if (i === 0) {
            previousWord = ladderWord;
        } else {
            var previousNode = new WordNode(previousWord,null,dictionarySet,dictionaryObj);
            if (!previousNode.nextRungWords().includes(ladderWord)) {
                anagrams = true;
                let sorted = ladderWord.split("").sort();
                if (previousWord.split("").sort().join("") != sorted.join("")) {
                    console.log(sorted)
                    console.log(previousWord.split("").sort())
                    addRemove = true;
                    previousNode.addAddRemoveChildren(false,"fuck")
                    let previousChildren = previousNode.children.map(child => child.word)
                    if (!previousNode.children || !previousChildren.includes(ladderWord)) {
                        cleanUpMessage(`${inputValues[i]} is not one operation away from ${previousWord}`);
                        break
                    }
                }
            }
            previousWord = ladderWord;
        }
    }
    if (previousWord === inputValues[inputValues.length-1].toLowerCase()) {
        const ourLadder = new WordLadder(inputValues[0].toLowerCase(),previousWord,dictionary,dictionaryObj);
        const ourShortestLadderOutput = ourLadder.shortestLadder(anagrams,addRemove);
        const ourShortestLadder = ourShortestLadderOutput[0];
        const ourShortestTree = ourShortestLadderOutput[1];
        if (ourShortestLadder.length === inputValues.length) {
            cleanUpMessage(`Great job, your ladder from ${inputValues[0].toLowerCase()} to ${previousWord} was just as short as the shortest one we could generate <br>`);
        } else {
            cleanUpMessage(`Nice job. However, we were able to find a ladder from ${inputValues[0].toLowerCase()} to ${previousWord} that was ${inputValues.length - ourShortestLadder.length} steps shorter than yours. If you would like to see our shortest ladder, just enter the two words in the form above (making sure to allow anagrams and adding/removing letters if applicable).`);
        }
    }
})

}


function cleanUpMessage(message) {
    document.getElementById("ladder").innerText = message
    const anotherAnchor = document.getElementById("ladder").appendChild(document.createElement("a"));
    anotherAnchor.innerText = "Try making another word ladder";
    anotherAnchor.addEventListener(
    'click', function(e) {
        e.preventDefault();
        diyLadder(new Set(dictionary),dictionaryObj);
    }, false
    );
}

function clickClear() {
    const textInputs = document.querySelectorAll('input[type=text]')
    textInputs.forEach(input => {
        
        input.addEventListener(
            'click', function(e) {
                // e.preventDefault();
                if (!input.classList.contains("clicked")) {
                var holder = input.value;
                input.value = "";
                input.classList.add("clicked")

                console.log(input.value)


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
}