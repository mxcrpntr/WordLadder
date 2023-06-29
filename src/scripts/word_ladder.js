import WordNode from "./word_node.js";



var fs = require("fs");
var dictionaryStr = fs.readFile("../dictionary.txt");
var dictionaryArr = dictionaryStr.split("\n");

export default class WordLadder {
    constructor(startWord,endWord) {
        this.startWord = startWord;
        this.endWord = endWord;
        this.dictionary = dictionaryArr;
    }
    shortestLadder(anagrams=false,addRemove=false) {
        if (this.startWord.length != this.endWord.length && !addRemove) {
            return undefined;
        }
        const startNode = new WordNode(this.startWord,null,this.dictionary);
        if (anagrams) {
            startNode.addAnagramChildren();   
        }
        if (addRemove) {
            startNode.addAddRemoveChildren();   
        }
        const alreadySeenWords = [];
        const visitQueue = startNode.children;
        while (visitQueue.length > 0) {
            let currentNode = visitQueue.shift;
            if (currentNode.word === endWord) {
                break;
            }
            currentNode.children.forEach(childNode => {
                if (!alreadySeenWords.includes(childNode.word)) {
                    visitQueue.push(childNode);
                }
            })
            alreadySeenWords.push(currentNode.word);
        }
        if (currentNode.word === endWord) {
            let parent = currentNode.parent;
            let node = currentNode;
            let ladder = [];
            while (parent != null) {
                ladder.shift(node.word);
                node = parent;
                parent = node.parent;
            }
            return ladder;
        }
        return undefined;
    }
}