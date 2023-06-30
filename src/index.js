import Example from "./scripts/example"
import WordLadder from "./scripts/word_ladder"

document.addEventListener("DOMContentLoaded", async () => {
    const response = await fetch('./src/dictionary.txt');
    const data = await response.text();
    const dictionary = new Set(data.split("\n"));
    window.dictionary = dictionary;
    window.WordLadder = WordLadder;
    
})
