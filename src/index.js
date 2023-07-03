import Example from "./scripts/example"
import WordLadder from "./scripts/word_ladder"

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
    window.dictionary = dictionary;
    window.dictionaryObj = dictionaryObj;
    window.WordLadder = WordLadder;
    
})
