
const ALPHA = 'abcdefghijklmnopqrstuvwxyz'.split("");

export default class WordNode {
    constructor(word,parent,dictionary) {
        this.word = word;
        this.parent = parent;
        this.dictionary = dictionary;
        this.children = [];
        this.nextRungWords = this.nextRungWords.bind(this);
        // this.addRungChildren.bind(this)();
        // this.anagrams = anagrams.bind(this)(this.word);
        // this.addLetterWords = this.addLetterWords.bind(this);
        // this.removeLetterWords = this.removeLetterWords.bind(this);
    }
    addChild(newWord) {
        const child = new WordNode(newWord,this,this.dictionary);
        this.children.push(child);
    }
    removeChild(child) {
        const childIdx = this.children.indexOf(child);
        if (childIdx >= 0 && childIdx < this.children.length) {
            this.children.splice(childIdx,1);
        }
    }
    nextRungWords() {
        const nextRungWords = [];
        for (let i = 0; i < this.word.length; i++) {
            let beforeStr = this.word.slice(0,i);
            let afterStr = this.word.slice(i+1);
            for (let j = 0; j < ALPHA.length; j++) {
                let newStr = beforeStr.split("")
                            .concat([ALPHA[j]])
                            .concat(afterStr.split(""))
                            .join("");
                if (this.dictionary.has(newStr) && newStr != this.word) nextRungWords.push(newStr);
            }
        }
        return nextRungWords;
    }
    addRungChildren() {
        let rungChildren = this.nextRungWords();
        for (let i = 0; i < rungChildren.length; i++) {
            this.addChild(rungChildren[i]);
        }
    }
    addAnagramChildren() {
        this.anagrams.forEach(anagram => {
            this.addChild(anagram);
        })
    }
    addLetterWords() {
        const addLetterWords = [];
        for (let i = 0; i < this.word.length; i++) {
            for (let j = 0; j < ALPHA.length; j++) {
                let beforeStr = this.word.slice(0,i);
                let afterStr = this.word.slice(i);
                for (let j = 0; j < ALPHA.length; j++) {
                    let newStr = beforeStr.split("")
                                .concat([ALPHA[j]])
                                .concat(afterStr.split(""))
                                .join("");
                    if (this.dictionary.has(newStr)) addLetterWords.push(newStr);
                }
            }
        }
        return addLetterWords;
    }
    removeLetterWords() {
        const removeLetterWords = [];
        for (let i = 0; i < this.word.length; i++) {
            let beforeStr = this.word.slice(0,i);
            let afterStr = this.word.slice(i+1);
            let newStr = beforeStr.split("")
                        .concat(afterStr.split(""))
                        .join("");
            if (this.dictionary.has(newStr)) removeLetterWords.push(newStr);
        }
        return removeLetterWords;
    }
    addAddRemoveChildren() {
        this.addLetterWords().forEach(addWord => {
            this.addChild(addWord);
        })
        this.removeLetterWords().forEach(removeWord => {
            this.addChild(removeWord);
        })
    }
}

function anagrams(word) {
    // console.log(`lookin up anagrams for ${word}`)
    const anagrams = [];
    perms(word).forEach(str => {
        if (this.dictionary.has(str) && str != word) {
            anagrams.push(str);
        }
    })
    return anagrams;
}

function perms(word) {
    if (word.length == 0) return [];
    if (word.length == 1) return [word];
    let permsArr = [];
    for (let i = 0; i < word.length; i++) {

        let newArr = word.split("");
        newArr.splice(i,1);
        let shorterPerms = perms(newArr.join(""));

        let iLetterArr = word.split("").slice(i,i+1);
 
        let iPerms = shorterPerms.map(perm => (iLetterArr.concat(perm.split(""))).join(""));
        permsArr = permsArr.concat(iPerms);
    }
    return permsArr;
}