<h1> Word Ladder Generator </h1>

<hr>

<p>
<a href="https://mxcrpntr.github.io/JSProject/">Word Ladder Generator</a> is an interactive data visualization project utilizing a dictionary wordlist text file and some tree traversal algorithms to construct <a href="https://en.wikipedia.org/wiki/Word_ladder">word ladders</a> and generate (often massive) radial tree visualizations of the word ladder search trees using JavaScript and d3.
</p>

<br>
<img src="wlss1.png">
<br>
<img src="wlss2.png">

<p>
I was inspired to write this program to explore the extensiveness of connection between words using simple operations, and, for the purpose of making the dictionary <i>even more connected</i>, I opted to include non-traditional word ladder operations (<i>i.e.</i>, anagramming and adding or dropping one letter) as options for users. As I worked more on the code behind the ladder- and tree-generating algorithms I became further motivated by the pursuit of the greatest possible efficiency in my ladder creation and tree searching code. (See the anagram finder snippet below.)
</p>
<br>

<h2>Functionality and MVPs</h2>
<p>
Users are currently able to:

<ul>
<li>enter two words and, if both words are valid dictionary entries, see the shortest corresponding ladder between the two words as well as the tree visualization generated while searching for the word ladder;</li>
<li>explore the various other 'sub-ladders' in the tree visualization;</li>
<li>enter their own word ladder and see what the program thinks of it. (Can it find one that is shorter, or is the user's as good as it gets?)</li>
</ul>



</p>