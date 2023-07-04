import * as d3 from "d3"


let testLadderInput = new WordLadder(startWord,endWord,dictionary,dictionaryObj);
let testLadderOutput = testLadderInput.shortestLadder(anagrams,addRemove);
let testLadder = testLadderOutput[0];
let startNode = testLadderOutput[1];

const idQueue = [startNode];
var currentNode = undefined;
var treeId = 0;

until (idQueue.length === 0) {
    currentNode = idQueue.shift();
    currentNode.id = treeId;
    treeId++;
    idQueue = idQueue.concat(currentNode.children)
}


var width = 960,
    height = 500;

var tree = d3.layout.tree()
    .size([width - 20, height - 20]);

var root = {word: startNode.word},
    nodes = tree(root);

root.parent = root;
root.px = root.x;
root.py = root.y;

var diagonal = d3.svg.diagonal();

var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(10,10)");

var node = svg.selectAll(".node"),
    link = svg.selectAll(".link");

var duration = 750,
    timer = setInterval(update, duration);

const treeQueue = startNode.children;

function update() {
//   if (nodes.length >= 500) return clearInterval(timer);

    currentNode = treeQueue.shift();


  // Add a new node to a random parent.
  var n = currentNode,
      p = currentNode.parent;
  if (p.children) p.children.push(n); else p.children = [n];
  nodes.push(n);

  treeQueue = treeQueue.concat(currentNode.children);

  // Recompute the layout and data join.
  node = node.data(tree.nodes(root), function(d) { return d.id; });
  link = link.data(tree.links(nodes), function(d) { return d.source.id + "-" + d.target.id; });

  // Add entering nodes in the parent’s old position.
  node.enter().append("circle")
      .attr("class", "node")
      .attr("r", 4)
      .attr("cx", function(d) { return d.parent.px; })
      .attr("cy", function(d) { return d.parent.py; });

      node.enter().append("text")
    .attr("class", "word")
    .attr("x", function(d) { return d.parent.px; })
    .attr("y", function(d) { return d.parent.py;})
    .text(function(d) { return d.word; });

  // Add entering links in the parent’s old position.
  link.enter().insert("path", ".node")
      .attr("class", "link")
      .attr("d", function(d) {
        var o = {x: d.source.px, y: d.source.py};
        return diagonal({source: o, target: o});
      });

  // Transition nodes and links to their new positions.
  var t = svg.transition()
      .duration(duration);

  t.selectAll(".link")
      .attr("d", diagonal);

  t.selectAll(".node")
      .attr("cx", function(d) { return d.px = d.x; })
      .attr("cy", function(d) { return d.py = d.y; });

    t.selectAll(".word")
    .attr("x", function(d) { return d.px; })
    .attr("y", function(d) { return d.py + 20; })
    .attr("transform", function(d) {
        return "translate(" + d.px + "," + (d.py + 20) + ")";
    });


}
