import WordNode from "./word_node.js";




export default class WordLadder {
    constructor(startWord,endWord,dictionary) {
        if (!dictionary.has(startWord)) throw Error `${startWord} is not in our dictionary!`
        if (!dictionary.has(endWord)) throw Error `${endWord} is not in our dictionary!`
        this.startWord = startWord;
        this.endWord = endWord;
        this.dictionary = dictionary;
    }
    shortestLadder(anagrams=false,addRemove=false) {
        if (this.startWord.length != this.endWord.length && !addRemove) {
            return undefined;
        }
        const startNode = new WordNode(this.startWord,null,this.dictionary);
        if (anagrams === true) {
            console.log("hey")
            startNode.addAnagramChildren();   
        }
        if (addRemove === true) {
            startNode.addAddRemoveChildren();   
        }
        startNode.addRungChildren();
        const alreadySeenWords = [];
        const visitQueue = startNode.children;
        let currentNode = startNode;
        while (visitQueue.length > 0) {
            currentNode = visitQueue.shift();
            if (currentNode.word === this.endWord) {
                break;
            }
            currentNode.addRungChildren();
            if (anagrams === true) {
                console.log("hey")
                currentNode.addAnagramChildren();
            }
            if (addRemove === true) {
                currentNode.addAddRemoveChildren();
            }
            alreadySeenWords.push(currentNode.word);
            let visitWords = visitQueue.map(node => node.word);
            currentNode.children.forEach(childNode => {
                if (!alreadySeenWords.includes(childNode.word) && !visitWords.includes(childNode.word)) {
                    visitQueue.push(childNode);
                    visitWords.push(childNode.word);
                }
            })
        }
        if (currentNode.word === this.endWord) {
            let parent = currentNode.parent;
            let node = currentNode;
            let ladder = [currentNode.word];
            while (parent != null) {
                node = parent;
                parent = node.parent;
                ladder.unshift(node.word);
            }
            return ladder;
        }
        return undefined;
    }
}

