
const ALPHA = 'abcdefghijklmnopqrstuvwxyz'.split("");

export default class WordNode {
    constructor(word,parent,dictionary,dictionaryObj) {
        this.word = word;
        this.parent = parent;
        this.dictionary = dictionary;
        this.children = [];
        this.nextRungWords = this.nextRungWords.bind(this);
        // this.addRungChildren.bind(this)();
        // this.anagrams = anagrams.bind(this)(this.word);
        // this.addLetterWords = this.addLetterWords.bind(this);
        // this.removeLetterWords = this.removeLetterWords.bind(this);
        this.dictionaryObj = dictionaryObj
    }
    addChild(newWord) {
        const child = new WordNode(newWord,this,this.dictionary,this.dictionaryObj);
        if (!child.isOwnAncestor()) this.children.push(child);
    }
    // removeChild(child) {
    //     const childIdx = this.children.indexOf(child);
    //     if (childIdx >= 0 && childIdx < this.children.length) {
    //         this.children.splice(childIdx,1);
    //     }
    // }
    nextRungWords() {
        const nextRungWords = [];
        for (let i = 0; i < this.word.length; i++) {
            let beforeStr = this.word.slice(0,i);
            let afterStr = this.word.slice(i+1);
            for (let j = 0; j < ALPHA.length; j++) {
                if (this.word.slice(i,i+1) != ALPHA[j]) {
                    let newStr = beforeStr.split("")
                                .concat([ALPHA[j]])
                                .concat(afterStr.split(""))
                                .join("");
                    if (this.dictionary.has(newStr) && newStr != this.word) nextRungWords.push(newStr);
                }
            }
        }
        return nextRungWords;
    }
    addChildren(anagrams=false,addRemove=false,endWordIsAChild=false,endWord) {
        if (addRemove) {
            endWordIsAChild = this.addAddRemoveChildren(endWordIsAChild,endWord);
        }
        if (anagrams) {
            endWordIsAChild = this.addAnagramChildren(endWordIsAChild,endWord);
        }
        endWordIsAChild = this.addRungChildren(endWordIsAChild,endWord);
        let children = this.children;
        let endWordIdx = 0;
        for (let i = 0; i < children.length; i++) {
            if (children[i].word === endWord) {
                endWordIdx = i;
            }
        }
        if (children.length > 0 && children[endWordIdx].word === endWord) {
            this.children = [children[endWordIdx]]
                            .concat(children.slice(0,endWordIdx)
                            .concat(children.slice(endWordIdx+1)));
        }
        return endWordIsAChild;
    }
    addRungChildren(endWordIsAChild,endWord) {
        let rungChildren = this.nextRungWords();
        for (let i = 0; i < rungChildren.length; i++) {
            if (!endWordIsAChild) this.addChild(rungChildren[i]);
            if (rungChildren[i] === endWord) endWordIsAChild = true;
        }
        return endWordIsAChild;
    }
    addAnagramChildren(endWordIsAChild,endWord) {
        let sorted = this.word.split("").sort();
        let anagrams = this.dictionaryObj[sorted];
        if (anagrams != undefined) {
            for (let i = 0; i < anagrams.length; i++) {
                if (!(this.word === anagrams[i]) && !endWordIsAChild) this.addChild(anagrams[i]);
                if (anagrams[i] === endWord) endWordIsAChild = true;
            }
        }
        return endWordIsAChild;
    }
    addLetterWords() {
        const addLetterWords = [];
        for (let i = 0; i <= this.word.length; i++) {
            let beforeStr = this.word.slice(0,i);
            let afterStr = this.word.slice(i);
            for (let j = 0; j < ALPHA.length; j++) {
                let newStr = beforeStr.split("")
                            .concat([ALPHA[j]])
                            .concat(afterStr.split(""))
                            .join("");
                if (this.dictionary.has(newStr)) {
                    addLetterWords.push(newStr);
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
    addAddRemoveChildren(endWordIsAChild,endWord) {
        this.addLetterWords().forEach(addWord => {
            if (!endWordIsAChild) this.addChild(addWord);
            if (addWord === endWord) endWordIsAChild = true;
        })
        this.removeLetterWords().forEach(removeWord => {
            if (!endWordIsAChild) this.addChild(removeWord);
            if (removeWord === endWord) endWordIsAChild = true;
        })
        return endWordIsAChild;
    }
    isOwnAncestor() {
        let parentNode = this.parent;
        while (parentNode != null) {
            if (parentNode.word === this.word) return true;
            parentNode = parentNode.parent;
        }
        return false;
    }
}

function anagrams(word) {
    const anagrams = [];
    // perms(word).forEach(str => {
    //     if (this.dictionary.has(str) && str != word) {
    //         anagrams.push(str);
    //     }
    // })
    this.dictionary.forEach(word2 => {
        if(isAnagram(word,word2)) anagrams.push(word2);
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

function isAnagram(word1,word2) {
    if (word1.length != word2.length) return false;
    const obj = {};
    for (let i = 0; i < word1.length; i++) {
        let letter = word1.slice(i,i+1);
        if (obj[letter] != undefined) {
            obj[letter] += 1;
        } else {
            obj[letter] = 1;
        }
    }
    for (let i = 0; i < word2.length; i++) {
        let letter = word2.slice(i,i+1);
        if (obj[letter] === undefined) {
            break
        } else {
            obj[letter] -= 1;
        }
    }
    return Object.values(obj).every(el => el === 0);
}