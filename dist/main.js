/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_example__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/example */ \"./src/scripts/example.js\");\n/* harmony import */ var _scripts_word_ladder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/word_ladder */ \"./src/scripts/word_ladder.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", async () => {\n  const response = await fetch('./src/dictionary.txt');\n  const data = await response.text();\n  const dictionary = new Set(data.split(\"\\n\"));\n  window.dictionary = dictionary;\n  window.WordLadder = _scripts_word_ladder__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7O0FBQXVDO0FBQ087QUFFOUNFLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsWUFBWTtFQUN0RCxNQUFNQyxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUFDLHNCQUFzQixDQUFDO0VBQ3BELE1BQU1DLElBQUksR0FBRyxNQUFNRixRQUFRLENBQUNHLElBQUksQ0FBQyxDQUFDO0VBQ2xDLE1BQU1DLFVBQVUsR0FBRyxJQUFJQyxHQUFHLENBQUNILElBQUksQ0FBQ0ksS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0VBQzVDQyxNQUFNLENBQUNILFVBQVUsR0FBR0EsVUFBVTtFQUM5QkcsTUFBTSxDQUFDVixVQUFVLEdBQUdBLDREQUFVO0FBRWxDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2pzcHJvamVjdC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFeGFtcGxlIGZyb20gXCIuL3NjcmlwdHMvZXhhbXBsZVwiXG5pbXBvcnQgV29yZExhZGRlciBmcm9tIFwiLi9zY3JpcHRzL3dvcmRfbGFkZGVyXCJcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy4vc3JjL2RpY3Rpb25hcnkudHh0Jyk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICBjb25zdCBkaWN0aW9uYXJ5ID0gbmV3IFNldChkYXRhLnNwbGl0KFwiXFxuXCIpKTtcbiAgICB3aW5kb3cuZGljdGlvbmFyeSA9IGRpY3Rpb25hcnk7XG4gICAgd2luZG93LldvcmRMYWRkZXIgPSBXb3JkTGFkZGVyO1xuICAgIFxufSlcbiJdLCJuYW1lcyI6WyJFeGFtcGxlIiwiV29yZExhZGRlciIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwidGV4dCIsImRpY3Rpb25hcnkiLCJTZXQiLCJzcGxpdCIsIndpbmRvdyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/example.js":
/*!********************************!*\
  !*** ./src/scripts/example.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Example {\n  constructor(ele) {\n    this.ele = ele;\n    this.ele.innerHTML = \"<h1>It's ALIVE!!!</h1>\";\n    this.handleClick = this.handleClick.bind(this);\n    this.ele.addEventListener(\"click\", this.handleClick);\n  }\n  handleClick() {\n    this.ele.children[0].innerText = \"Ouch!\";\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Example);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9leGFtcGxlLmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxPQUFPLENBQUM7RUFDVkMsV0FBV0EsQ0FBQ0MsR0FBRyxFQUFFO0lBQ2IsSUFBSSxDQUFDQSxHQUFHLEdBQUdBLEdBQUc7SUFDZCxJQUFJLENBQUNBLEdBQUcsQ0FBQ0MsU0FBUyxHQUFHLHdCQUF3QjtJQUM3QyxJQUFJLENBQUNDLFdBQVcsR0FBRyxJQUFJLENBQUNBLFdBQVcsQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQztJQUM5QyxJQUFJLENBQUNILEdBQUcsQ0FBQ0ksZ0JBQWdCLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQ0YsV0FBVyxDQUFDO0VBRXhEO0VBRUFBLFdBQVdBLENBQUEsRUFBRztJQUNWLElBQUksQ0FBQ0YsR0FBRyxDQUFDSyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUNDLFNBQVMsR0FBRyxPQUFPO0VBQzVDO0FBQ0o7QUFFQSwrREFBZVIsT0FBTyIsInNvdXJjZXMiOlsid2VicGFjazovL2pzcHJvamVjdC8uL3NyYy9zY3JpcHRzL2V4YW1wbGUuanM/ZmNlZSJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBFeGFtcGxlIHtcbiAgICBjb25zdHJ1Y3RvcihlbGUpIHtcbiAgICAgICAgdGhpcy5lbGUgPSBlbGU7XG4gICAgICAgIHRoaXMuZWxlLmlubmVySFRNTCA9IFwiPGgxPkl0J3MgQUxJVkUhISE8L2gxPlwiO1xuICAgICAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmVsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdGhpcy5oYW5kbGVDbGljayk7XG5cbiAgICB9XG5cbiAgICBoYW5kbGVDbGljaygpIHtcbiAgICAgICAgdGhpcy5lbGUuY2hpbGRyZW5bMF0uaW5uZXJUZXh0ID0gXCJPdWNoIVwiO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRXhhbXBsZTsiXSwibmFtZXMiOlsiRXhhbXBsZSIsImNvbnN0cnVjdG9yIiwiZWxlIiwiaW5uZXJIVE1MIiwiaGFuZGxlQ2xpY2siLCJiaW5kIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNoaWxkcmVuIiwiaW5uZXJUZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/example.js\n");

/***/ }),

/***/ "./src/scripts/word_ladder.js":
/*!************************************!*\
  !*** ./src/scripts/word_ladder.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ WordLadder; }\n/* harmony export */ });\n/* harmony import */ var _word_node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./word_node.js */ \"./src/scripts/word_node.js\");\n\nclass WordLadder {\n  constructor(startWord, endWord, dictionary) {\n    if (!dictionary.has(startWord)) throw Error`${startWord} is not in our dictionary!`;\n    if (!dictionary.has(endWord)) throw Error`${endWord} is not in our dictionary!`;\n    this.startWord = startWord;\n    this.endWord = endWord;\n    this.dictionary = dictionary;\n  }\n  shortestLadder() {\n    let anagrams = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n    let addRemove = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n    if (this.startWord.length != this.endWord.length && !addRemove) {\n      return undefined;\n    }\n    const startNode = new _word_node_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.startWord, null, this.dictionary);\n    if (anagrams === true) {\n      console.log(\"hey\");\n      startNode.addAnagramChildren();\n    }\n    if (addRemove === true) {\n      startNode.addAddRemoveChildren();\n    }\n    startNode.addRungChildren();\n    const alreadySeenWords = [];\n    const visitQueue = startNode.children;\n    let currentNode = startNode;\n    while (visitQueue.length > 0) {\n      currentNode = visitQueue.shift();\n      if (currentNode.word === this.endWord) {\n        break;\n      }\n      currentNode.addRungChildren();\n      if (anagrams === true) {\n        console.log(\"hey\");\n        currentNode.addAnagramChildren();\n      }\n      if (addRemove === true) {\n        currentNode.addAddRemoveChildren();\n      }\n      alreadySeenWords.push(currentNode.word);\n      let visitWords = visitQueue.map(node => node.word);\n      currentNode.children.forEach(childNode => {\n        if (!alreadySeenWords.includes(childNode.word) && !visitWords.includes(childNode.word)) {\n          visitQueue.push(childNode);\n          visitWords.push(childNode.word);\n        }\n      });\n    }\n    if (currentNode.word === this.endWord) {\n      let parent = currentNode.parent;\n      let node = currentNode;\n      let ladder = [currentNode.word];\n      while (parent != null) {\n        node = parent;\n        parent = node.parent;\n        ladder.unshift(node.word);\n      }\n      return ladder;\n    }\n    return undefined;\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDSyxJQUFJLENBQUNLLFNBQVMsQ0FBQztVQUMxQkosVUFBVSxDQUFDRCxJQUFJLENBQUNLLFNBQVMsQ0FBQ04sSUFBSSxDQUFDO1FBQ25DO01BQ0osQ0FBQyxDQUFDO0lBQ047SUFDQSxJQUFJRixXQUFXLENBQUNFLElBQUksS0FBSyxJQUFJLENBQUNyQixPQUFPLEVBQUU7TUFDbkMsSUFBSTZCLE1BQU0sR0FBR1YsV0FBVyxDQUFDVSxNQUFNO01BQy9CLElBQUlKLElBQUksR0FBR04sV0FBVztNQUN0QixJQUFJVyxNQUFNLEdBQUcsQ0FBQ1gsV0FBVyxDQUFDRSxJQUFJLENBQUM7TUFDL0IsT0FBT1EsTUFBTSxJQUFJLElBQUksRUFBRTtRQUNuQkosSUFBSSxHQUFHSSxNQUFNO1FBQ2JBLE1BQU0sR0FBR0osSUFBSSxDQUFDSSxNQUFNO1FBQ3BCQyxNQUFNLENBQUNDLE9BQU8sQ0FBQ04sSUFBSSxDQUFDSixJQUFJLENBQUM7TUFDN0I7TUFDQSxPQUFPUyxNQUFNO0lBQ2pCO0lBQ0EsT0FBT3RCLFNBQVM7RUFDcEI7QUFDSiIsInNvdXJjZXMiOlsid2VicGFjazovL2pzcHJvamVjdC8uL3NyYy9zY3JpcHRzL3dvcmRfbGFkZGVyLmpzPzY0MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFdvcmROb2RlIGZyb20gXCIuL3dvcmRfbm9kZS5qc1wiO1xuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXb3JkTGFkZGVyIHtcbiAgICBjb25zdHJ1Y3RvcihzdGFydFdvcmQsZW5kV29yZCxkaWN0aW9uYXJ5KSB7XG4gICAgICAgIGlmICghZGljdGlvbmFyeS5oYXMoc3RhcnRXb3JkKSkgdGhyb3cgRXJyb3IgYCR7c3RhcnRXb3JkfSBpcyBub3QgaW4gb3VyIGRpY3Rpb25hcnkhYFxuICAgICAgICBpZiAoIWRpY3Rpb25hcnkuaGFzKGVuZFdvcmQpKSB0aHJvdyBFcnJvciBgJHtlbmRXb3JkfSBpcyBub3QgaW4gb3VyIGRpY3Rpb25hcnkhYFxuICAgICAgICB0aGlzLnN0YXJ0V29yZCA9IHN0YXJ0V29yZDtcbiAgICAgICAgdGhpcy5lbmRXb3JkID0gZW5kV29yZDtcbiAgICAgICAgdGhpcy5kaWN0aW9uYXJ5ID0gZGljdGlvbmFyeTtcbiAgICB9XG4gICAgc2hvcnRlc3RMYWRkZXIoYW5hZ3JhbXM9ZmFsc2UsYWRkUmVtb3ZlPWZhbHNlKSB7XG4gICAgICAgIGlmICh0aGlzLnN0YXJ0V29yZC5sZW5ndGggIT0gdGhpcy5lbmRXb3JkLmxlbmd0aCAmJiAhYWRkUmVtb3ZlKSB7XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0YXJ0Tm9kZSA9IG5ldyBXb3JkTm9kZSh0aGlzLnN0YXJ0V29yZCxudWxsLHRoaXMuZGljdGlvbmFyeSk7XG4gICAgICAgIGlmIChhbmFncmFtcyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJoZXlcIilcbiAgICAgICAgICAgIHN0YXJ0Tm9kZS5hZGRBbmFncmFtQ2hpbGRyZW4oKTsgICBcbiAgICAgICAgfVxuICAgICAgICBpZiAoYWRkUmVtb3ZlID09PSB0cnVlKSB7XG4gICAgICAgICAgICBzdGFydE5vZGUuYWRkQWRkUmVtb3ZlQ2hpbGRyZW4oKTsgICBcbiAgICAgICAgfVxuICAgICAgICBzdGFydE5vZGUuYWRkUnVuZ0NoaWxkcmVuKCk7XG4gICAgICAgIGNvbnN0IGFscmVhZHlTZWVuV29yZHMgPSBbXTtcbiAgICAgICAgY29uc3QgdmlzaXRRdWV1ZSA9IHN0YXJ0Tm9kZS5jaGlsZHJlbjtcbiAgICAgICAgbGV0IGN1cnJlbnROb2RlID0gc3RhcnROb2RlO1xuICAgICAgICB3aGlsZSAodmlzaXRRdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjdXJyZW50Tm9kZSA9IHZpc2l0UXVldWUuc2hpZnQoKTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50Tm9kZS53b3JkID09PSB0aGlzLmVuZFdvcmQpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGN1cnJlbnROb2RlLmFkZFJ1bmdDaGlsZHJlbigpO1xuICAgICAgICAgICAgaWYgKGFuYWdyYW1zID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJoZXlcIilcbiAgICAgICAgICAgICAgICBjdXJyZW50Tm9kZS5hZGRBbmFncmFtQ2hpbGRyZW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhZGRSZW1vdmUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50Tm9kZS5hZGRBZGRSZW1vdmVDaGlsZHJlbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWxyZWFkeVNlZW5Xb3Jkcy5wdXNoKGN1cnJlbnROb2RlLndvcmQpO1xuICAgICAgICAgICAgbGV0IHZpc2l0V29yZHMgPSB2aXNpdFF1ZXVlLm1hcChub2RlID0+IG5vZGUud29yZCk7XG4gICAgICAgICAgICBjdXJyZW50Tm9kZS5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkTm9kZSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFhbHJlYWR5U2VlbldvcmRzLmluY2x1ZGVzKGNoaWxkTm9kZS53b3JkKSAmJiAhdmlzaXRXb3Jkcy5pbmNsdWRlcyhjaGlsZE5vZGUud29yZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmlzaXRRdWV1ZS5wdXNoKGNoaWxkTm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIHZpc2l0V29yZHMucHVzaChjaGlsZE5vZGUud29yZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICBpZiAoY3VycmVudE5vZGUud29yZCA9PT0gdGhpcy5lbmRXb3JkKSB7XG4gICAgICAgICAgICBsZXQgcGFyZW50ID0gY3VycmVudE5vZGUucGFyZW50O1xuICAgICAgICAgICAgbGV0IG5vZGUgPSBjdXJyZW50Tm9kZTtcbiAgICAgICAgICAgIGxldCBsYWRkZXIgPSBbY3VycmVudE5vZGUud29yZF07XG4gICAgICAgICAgICB3aGlsZSAocGFyZW50ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBub2RlID0gcGFyZW50O1xuICAgICAgICAgICAgICAgIHBhcmVudCA9IG5vZGUucGFyZW50O1xuICAgICAgICAgICAgICAgIGxhZGRlci51bnNoaWZ0KG5vZGUud29yZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbGFkZGVyO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxufVxuXG4iXSwibmFtZXMiOlsiV29yZE5vZGUiLCJXb3JkTGFkZGVyIiwiY29uc3RydWN0b3IiLCJzdGFydFdvcmQiLCJlbmRXb3JkIiwiZGljdGlvbmFyeSIsImhhcyIsIkVycm9yIiwic2hvcnRlc3RMYWRkZXIiLCJhbmFncmFtcyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsImFkZFJlbW92ZSIsInN0YXJ0Tm9kZSIsImNvbnNvbGUiLCJsb2ciLCJhZGRBbmFncmFtQ2hpbGRyZW4iLCJhZGRBZGRSZW1vdmVDaGlsZHJlbiIsImFkZFJ1bmdDaGlsZHJlbiIsImFscmVhZHlTZWVuV29yZHMiLCJ2aXNpdFF1ZXVlIiwiY2hpbGRyZW4iLCJjdXJyZW50Tm9kZSIsInNoaWZ0Iiwid29yZCIsInB1c2giLCJ2aXNpdFdvcmRzIiwibWFwIiwibm9kZSIsImZvckVhY2giLCJjaGlsZE5vZGUiLCJpbmNsdWRlcyIsInBhcmVudCIsImxhZGRlciIsInVuc2hpZnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/word_ladder.js\n");

/***/ }),

/***/ "./src/scripts/word_node.js":
/*!**********************************!*\
  !*** ./src/scripts/word_node.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ WordNode; }\n/* harmony export */ });\nconst ALPHA = 'abcdefghijklmnopqrstuvwxyz'.split(\"\");\nclass WordNode {\n  constructor(word, parent, dictionary) {\n    this.word = word;\n    this.parent = parent;\n    this.dictionary = dictionary;\n    this.children = [];\n    this.nextRungWords = this.nextRungWords.bind(this);\n    // this.addRungChildren.bind(this)();\n    // this.anagrams = anagrams.bind(this)(this.word);\n    // this.addLetterWords = this.addLetterWords.bind(this);\n    // this.removeLetterWords = this.removeLetterWords.bind(this);\n  }\n\n  addChild(newWord) {\n    const child = new WordNode(newWord, this, this.dictionary);\n    this.children.push(child);\n  }\n  removeChild(child) {\n    const childIdx = this.children.indexOf(child);\n    if (childIdx >= 0 && childIdx < this.children.length) {\n      this.children.splice(childIdx, 1);\n    }\n  }\n  nextRungWords() {\n    const nextRungWords = [];\n    for (let i = 0; i < this.word.length; i++) {\n      let beforeStr = this.word.slice(0, i);\n      let afterStr = this.word.slice(i + 1);\n      for (let j = 0; j < ALPHA.length; j++) {\n        let newStr = beforeStr.split(\"\").concat([ALPHA[j]]).concat(afterStr.split(\"\")).join(\"\");\n        if (this.dictionary.has(newStr) && newStr != this.word) nextRungWords.push(newStr);\n      }\n    }\n    return nextRungWords;\n  }\n  addRungChildren() {\n    let rungChildren = this.nextRungWords();\n    for (let i = 0; i < rungChildren.length; i++) {\n      this.addChild(rungChildren[i]);\n    }\n  }\n  addAnagramChildren() {\n    this.anagrams.forEach(anagram => {\n      this.addChild(anagram);\n    });\n  }\n  addLetterWords() {\n    const addLetterWords = [];\n    for (let i = 0; i < this.word.length; i++) {\n      for (let j = 0; j < ALPHA.length; j++) {\n        let beforeStr = this.word.slice(0, i);\n        let afterStr = this.word.slice(i);\n        for (let j = 0; j < ALPHA.length; j++) {\n          let newStr = beforeStr.split(\"\").concat([ALPHA[j]]).concat(afterStr.split(\"\")).join(\"\");\n          if (this.dictionary.has(newStr)) addLetterWords.push(newStr);\n        }\n      }\n    }\n    return addLetterWords;\n  }\n  removeLetterWords() {\n    const removeLetterWords = [];\n    for (let i = 0; i < this.word.length; i++) {\n      let beforeStr = this.word.slice(0, i);\n      let afterStr = this.word.slice(i + 1);\n      let newStr = beforeStr.split(\"\").concat(afterStr.split(\"\")).join(\"\");\n      if (this.dictionary.has(newStr)) removeLetterWords.push(newStr);\n    }\n    return removeLetterWords;\n  }\n  addAddRemoveChildren() {\n    this.addLetterWords().forEach(addWord => {\n      this.addChild(addWord);\n    });\n    this.removeLetterWords().forEach(removeWord => {\n      this.addChild(removeWord);\n    });\n  }\n}\nfunction anagrams(word) {\n  // console.log(`lookin up anagrams for ${word}`)\n  const anagrams = [];\n  perms(word).forEach(str => {\n    if (this.dictionary.has(str) && str != word) {\n      anagrams.push(str);\n    }\n  });\n  return anagrams;\n}\nfunction perms(word) {\n  if (word.length == 0) return [];\n  if (word.length == 1) return [word];\n  let permsArr = [];\n  for (let i = 0; i < word.length; i++) {\n    let newArr = word.split(\"\");\n    newArr.splice(i, 1);\n    let shorterPerms = perms(newArr.join(\"\"));\n    let iLetterArr = word.split(\"\").slice(i, i + 1);\n    let iPerms = shorterPerms.map(perm => iLetterArr.concat(perm.split(\"\")).join(\"\"));\n    permsArr = permsArr.concat(iPerms);\n  }\n  return permsArr;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQyxDQUFFeUIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ25GZSxRQUFRLEdBQUdBLFFBQVEsQ0FBQ2hCLE1BQU0sQ0FBQ29CLE1BQU0sQ0FBQztFQUN0QztFQUNBLE9BQU9KLFFBQVE7QUFDbkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc3Byb2plY3QvLi9zcmMvc2NyaXB0cy93b3JkX25vZGUuanM/MmMzMiJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IEFMUEhBID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6Jy5zcGxpdChcIlwiKTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV29yZE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKHdvcmQscGFyZW50LGRpY3Rpb25hcnkpIHtcbiAgICAgICAgdGhpcy53b3JkID0gd29yZDtcbiAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIHRoaXMuZGljdGlvbmFyeSA9IGRpY3Rpb25hcnk7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcbiAgICAgICAgdGhpcy5uZXh0UnVuZ1dvcmRzID0gdGhpcy5uZXh0UnVuZ1dvcmRzLmJpbmQodGhpcyk7XG4gICAgICAgIC8vIHRoaXMuYWRkUnVuZ0NoaWxkcmVuLmJpbmQodGhpcykoKTtcbiAgICAgICAgLy8gdGhpcy5hbmFncmFtcyA9IGFuYWdyYW1zLmJpbmQodGhpcykodGhpcy53b3JkKTtcbiAgICAgICAgLy8gdGhpcy5hZGRMZXR0ZXJXb3JkcyA9IHRoaXMuYWRkTGV0dGVyV29yZHMuYmluZCh0aGlzKTtcbiAgICAgICAgLy8gdGhpcy5yZW1vdmVMZXR0ZXJXb3JkcyA9IHRoaXMucmVtb3ZlTGV0dGVyV29yZHMuYmluZCh0aGlzKTtcbiAgICB9XG4gICAgYWRkQ2hpbGQobmV3V29yZCkge1xuICAgICAgICBjb25zdCBjaGlsZCA9IG5ldyBXb3JkTm9kZShuZXdXb3JkLHRoaXMsdGhpcy5kaWN0aW9uYXJ5KTtcbiAgICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKGNoaWxkKTtcbiAgICB9XG4gICAgcmVtb3ZlQ2hpbGQoY2hpbGQpIHtcbiAgICAgICAgY29uc3QgY2hpbGRJZHggPSB0aGlzLmNoaWxkcmVuLmluZGV4T2YoY2hpbGQpO1xuICAgICAgICBpZiAoY2hpbGRJZHggPj0gMCAmJiBjaGlsZElkeCA8IHRoaXMuY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuLnNwbGljZShjaGlsZElkeCwxKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBuZXh0UnVuZ1dvcmRzKCkge1xuICAgICAgICBjb25zdCBuZXh0UnVuZ1dvcmRzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy53b3JkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgYmVmb3JlU3RyID0gdGhpcy53b3JkLnNsaWNlKDAsaSk7XG4gICAgICAgICAgICBsZXQgYWZ0ZXJTdHIgPSB0aGlzLndvcmQuc2xpY2UoaSsxKTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgQUxQSEEubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgbmV3U3RyID0gYmVmb3JlU3RyLnNwbGl0KFwiXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmNvbmNhdChbQUxQSEFbal1dKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb25jYXQoYWZ0ZXJTdHIuc3BsaXQoXCJcIikpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmpvaW4oXCJcIik7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGljdGlvbmFyeS5oYXMobmV3U3RyKSAmJiBuZXdTdHIgIT0gdGhpcy53b3JkKSBuZXh0UnVuZ1dvcmRzLnB1c2gobmV3U3RyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV4dFJ1bmdXb3JkcztcbiAgICB9XG4gICAgYWRkUnVuZ0NoaWxkcmVuKCkge1xuICAgICAgICBsZXQgcnVuZ0NoaWxkcmVuID0gdGhpcy5uZXh0UnVuZ1dvcmRzKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcnVuZ0NoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmFkZENoaWxkKHJ1bmdDaGlsZHJlbltpXSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYWRkQW5hZ3JhbUNoaWxkcmVuKCkge1xuICAgICAgICB0aGlzLmFuYWdyYW1zLmZvckVhY2goYW5hZ3JhbSA9PiB7XG4gICAgICAgICAgICB0aGlzLmFkZENoaWxkKGFuYWdyYW0pO1xuICAgICAgICB9KVxuICAgIH1cbiAgICBhZGRMZXR0ZXJXb3JkcygpIHtcbiAgICAgICAgY29uc3QgYWRkTGV0dGVyV29yZHMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLndvcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgQUxQSEEubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgYmVmb3JlU3RyID0gdGhpcy53b3JkLnNsaWNlKDAsaSk7XG4gICAgICAgICAgICAgICAgbGV0IGFmdGVyU3RyID0gdGhpcy53b3JkLnNsaWNlKGkpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgQUxQSEEubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1N0ciA9IGJlZm9yZVN0ci5zcGxpdChcIlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuY29uY2F0KFtBTFBIQVtqXV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb25jYXQoYWZ0ZXJTdHIuc3BsaXQoXCJcIikpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5qb2luKFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5kaWN0aW9uYXJ5LmhhcyhuZXdTdHIpKSBhZGRMZXR0ZXJXb3Jkcy5wdXNoKG5ld1N0cik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhZGRMZXR0ZXJXb3JkcztcbiAgICB9XG4gICAgcmVtb3ZlTGV0dGVyV29yZHMoKSB7XG4gICAgICAgIGNvbnN0IHJlbW92ZUxldHRlcldvcmRzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy53b3JkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgYmVmb3JlU3RyID0gdGhpcy53b3JkLnNsaWNlKDAsaSk7XG4gICAgICAgICAgICBsZXQgYWZ0ZXJTdHIgPSB0aGlzLndvcmQuc2xpY2UoaSsxKTtcbiAgICAgICAgICAgIGxldCBuZXdTdHIgPSBiZWZvcmVTdHIuc3BsaXQoXCJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jb25jYXQoYWZ0ZXJTdHIuc3BsaXQoXCJcIikpXG4gICAgICAgICAgICAgICAgICAgICAgICAuam9pbihcIlwiKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmRpY3Rpb25hcnkuaGFzKG5ld1N0cikpIHJlbW92ZUxldHRlcldvcmRzLnB1c2gobmV3U3RyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVtb3ZlTGV0dGVyV29yZHM7XG4gICAgfVxuICAgIGFkZEFkZFJlbW92ZUNoaWxkcmVuKCkge1xuICAgICAgICB0aGlzLmFkZExldHRlcldvcmRzKCkuZm9yRWFjaChhZGRXb3JkID0+IHtcbiAgICAgICAgICAgIHRoaXMuYWRkQ2hpbGQoYWRkV29yZCk7XG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMucmVtb3ZlTGV0dGVyV29yZHMoKS5mb3JFYWNoKHJlbW92ZVdvcmQgPT4ge1xuICAgICAgICAgICAgdGhpcy5hZGRDaGlsZChyZW1vdmVXb3JkKTtcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGFuYWdyYW1zKHdvcmQpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhgbG9va2luIHVwIGFuYWdyYW1zIGZvciAke3dvcmR9YClcbiAgICBjb25zdCBhbmFncmFtcyA9IFtdO1xuICAgIHBlcm1zKHdvcmQpLmZvckVhY2goc3RyID0+IHtcbiAgICAgICAgaWYgKHRoaXMuZGljdGlvbmFyeS5oYXMoc3RyKSAmJiBzdHIgIT0gd29yZCkge1xuICAgICAgICAgICAgYW5hZ3JhbXMucHVzaChzdHIpO1xuICAgICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gYW5hZ3JhbXM7XG59XG5cbmZ1bmN0aW9uIHBlcm1zKHdvcmQpIHtcbiAgICBpZiAod29yZC5sZW5ndGggPT0gMCkgcmV0dXJuIFtdO1xuICAgIGlmICh3b3JkLmxlbmd0aCA9PSAxKSByZXR1cm4gW3dvcmRdO1xuICAgIGxldCBwZXJtc0FyciA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd29yZC5sZW5ndGg7IGkrKykge1xuXG4gICAgICAgIGxldCBuZXdBcnIgPSB3b3JkLnNwbGl0KFwiXCIpO1xuICAgICAgICBuZXdBcnIuc3BsaWNlKGksMSk7XG4gICAgICAgIGxldCBzaG9ydGVyUGVybXMgPSBwZXJtcyhuZXdBcnIuam9pbihcIlwiKSk7XG5cbiAgICAgICAgbGV0IGlMZXR0ZXJBcnIgPSB3b3JkLnNwbGl0KFwiXCIpLnNsaWNlKGksaSsxKTtcbiBcbiAgICAgICAgbGV0IGlQZXJtcyA9IHNob3J0ZXJQZXJtcy5tYXAocGVybSA9PiAoaUxldHRlckFyci5jb25jYXQocGVybS5zcGxpdChcIlwiKSkpLmpvaW4oXCJcIikpO1xuICAgICAgICBwZXJtc0FyciA9IHBlcm1zQXJyLmNvbmNhdChpUGVybXMpO1xuICAgIH1cbiAgICByZXR1cm4gcGVybXNBcnI7XG59Il0sIm5hbWVzIjpbIkFMUEhBIiwic3BsaXQiLCJXb3JkTm9kZSIsImNvbnN0cnVjdG9yIiwid29yZCIsInBhcmVudCIsImRpY3Rpb25hcnkiLCJjaGlsZHJlbiIsIm5leHRSdW5nV29yZHMiLCJiaW5kIiwiYWRkQ2hpbGQiLCJuZXdXb3JkIiwiY2hpbGQiLCJwdXNoIiwicmVtb3ZlQ2hpbGQiLCJjaGlsZElkeCIsImluZGV4T2YiLCJsZW5ndGgiLCJzcGxpY2UiLCJpIiwiYmVmb3JlU3RyIiwic2xpY2UiLCJhZnRlclN0ciIsImoiLCJuZXdTdHIiLCJjb25jYXQiLCJqb2luIiwiaGFzIiwiYWRkUnVuZ0NoaWxkcmVuIiwicnVuZ0NoaWxkcmVuIiwiYWRkQW5hZ3JhbUNoaWxkcmVuIiwiYW5hZ3JhbXMiLCJmb3JFYWNoIiwiYW5hZ3JhbSIsImFkZExldHRlcldvcmRzIiwicmVtb3ZlTGV0dGVyV29yZHMiLCJhZGRBZGRSZW1vdmVDaGlsZHJlbiIsImFkZFdvcmQiLCJyZW1vdmVXb3JkIiwicGVybXMiLCJzdHIiLCJwZXJtc0FyciIsIm5ld0FyciIsInNob3J0ZXJQZXJtcyIsImlMZXR0ZXJBcnIiLCJpUGVybXMiLCJtYXAiLCJwZXJtIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/word_node.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2NzcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc3Byb2plY3QvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;