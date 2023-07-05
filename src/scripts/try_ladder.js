



const ladderBox = document.getElementById("ladder");
ladderBox.innerHTML = "";
const form = ladderBox.appendChild("form");
var input = document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("value","Enter a word");
form.appendChild(input);
var addButton = document.createElement("input");
addButton.setAttribute("type","submit");
addButton.setAttribute("value","Add another word");
form.appendChild(addButton);
var submit = document.createElement("input");
submit.setAttribute("type","submit");
submit.setAttribute("value","See how your ladder stacks up");
form.appendChild(submit);