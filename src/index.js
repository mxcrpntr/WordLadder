import Example from "./scripts/example"
import WordLadder from "./scripts/word_ladder"

document.addEventListener("DOMContentLoaded", () => {
    const main = document.getElementById("main")
    new Example(main)
    window.WordLadder = WordLadder
})