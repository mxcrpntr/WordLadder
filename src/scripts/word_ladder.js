import WordNode from "./word_node.js";




export default class WordLadder {
    constructor(startWord,endWord,dictionary) {
        if (!dictionary.has(startWord)) throw Error `${startWord} is not in our dictionary!`
        if (!dictionary.has(endWord)) throw Error `${endWord} is not in our dictionary!`
        this.startWord = startWord;
        this.endWord = endWord;
        this.dictionary = dictionary;
    }
    shortestLadder(anagrams=false,addRemove=false,n=0) {
        if (this.startWord.length != this.endWord.length && !addRemove) {
            return undefined;
        }
        const startNode = new WordNode(this.startWord,null,this.dictionary);
        if (addRemove === true) {
            startNode.addAddRemoveChildren();
        }
        if (anagrams === true) {
            startNode.addAnagramChildren();   
        }
        startNode.addRungChildren();
        const alreadySeenWords = [];
        const visitQueue = startNode.children;
        let visitWordsTest = visitQueue.map(node => node.word);
        let currentNode = startNode;
        while (visitQueue.length > 0) {
            currentNode = visitQueue.shift();
            if (currentNode.word === this.endword) {
                if (n >0) {
                currentNode = visitQueue.shift();
                n--;
                }
            }
            if (currentNode.word === this.endWord) {
                while ((currentNode.word === this.endWord) && (n > 0)) {
                    // debugger
                    currentNode = visitQueue.shift();
                    n--;
                } 
                if (currentNode.word === this.endWord){
                // debugger
                break;
                }
            }
            if (addRemove === true) {
                currentNode.addAddRemoveChildren();
            }
            if (anagrams === true) {
                currentNode.addAnagramChildren();
            }
            currentNode.addRungChildren();
            alreadySeenWords.push(currentNode.word);
            let visitWords = visitQueue.map(node => node.word);
            currentNode.children.forEach(childNode => {
                if (childNode.word === this.endWord && n > 0) {
                    visitQueue.push(childNode);
                    visitWords.push(childNode.word);
                } else if (!alreadySeenWords.includes(childNode.word) && !visitWords.includes(childNode.word)) {
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

