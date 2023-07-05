import WordNode from "./word_node.js";




export default class WordLadder {
    constructor(startWord,endWord,dictionaryArr,dictionaryObj) {
        this.startWord = startWord;
        this.endWord = endWord;
        this.dictionary = new Set(dictionaryArr);
        if (!this.dictionary.has(startWord)) throw Error(`${startWord} is not in our dictionary!`);
        if (!this.dictionary.has(endWord)) throw Error(`${endWord} is not in our dictionary!`);
        this.dictionaryObj = dictionaryObj;
    }
    shortestLadder(anagrams=false,addRemove=false,n=0) {
        const startNode = new WordNode(this.startWord,null,this.dictionary,this.dictionaryObj);
        if (this.startWord.length != this.endWord.length && !addRemove) {
            throw Error(`${this.startWord} and ${this.endWord} are not the same length, please enable adding/dropping letters.`);
        }
        if (this.startWord === this.endWord) {
            return [[this.startWord],startNode];
        }
        let endWordIsAChild = false;
        let endWordInQueue = false;
        endWordIsAChild = startNode.addChildren.bind(startNode)(anagrams,addRemove,endWordIsAChild,this.endWord);
        const alreadySeenWords = [];
        const visitQueue = [].concat(startNode.children);
        if (visitQueue.includes(this.endWord)) {
            endWordInQueue = true;
        }
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
                    currentNode = visitQueue.shift();
                    n--;
                } 
                if (currentNode.word === this.endWord){
                break;
                }
            }
            endWordIsAChild = currentNode.addChildren.bind(currentNode)(anagrams,addRemove,endWordIsAChild,this.endWord);


            alreadySeenWords.push(currentNode.word);
            let visitWords = visitQueue.map(node => node.word);
            currentNode.children.forEach(childNode => {
                if (!endWordInQueue) {
                    // if (childNode.word === this.endWord && n > 0) {
                        // visitQueue.push(childNode);
                        // visitWords.push(childNode.word);
                    // } 
                    if (!alreadySeenWords.includes(childNode.word) && !visitWords.includes(childNode.word) && !childNode.isOwnAncestor()) {
                        visitQueue.push(childNode);
                        visitWords.push(childNode.word);
                        if (childNode.word === this.endWord) endWordInQueue = true;
                    } 
                    // else if (n > 0 && !childNode.isOwnAncestor() && !visitWords.includes(childNode.word)) {
                    //     visitQueue.push(childNode);
                    //     visitWords.push(childNode.word);
                    // }
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
            // return ladder;
            return [ladder,startNode];
        }
        // return undefined;
        return [undefined,startNode];
    }
}

