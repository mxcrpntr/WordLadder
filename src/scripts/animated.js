


export default function animateTree() {
    var width = 450,
    height = 250;

var tree = d3.layout.tree()
    .size([width - 20, height - 20]);

const parentNode = {id: 0, word: "cat", parent: null, children: []};
var root = {id: parentNode.id, word: parentNode.word, parent: null, children: []},
    nodes = tree(root);
const childArr = ["bat","eat","hat","mat","oat","pat","rat","sat","tat","vat","cot","cut","cab","cad","cam","can","cap", "car"]
for (let i = 0; i < childArr.length; i++) {
    let newChild = {id: i+1, word: childArr[i], parent: root, children: []};
    parentNode.children = parentNode.children.concat([newChild]);
}




var root = {id: parentNode.id, word: parentNode.word, parent: null, children: []},
    nodes = tree(root);

root.parent = root;
root.px = root.x;
root.py = root.y;

var diagonal = d3.svg.diagonal();

d3.select("#animation").innerHTML = ""

var svg = d3.select("#animation").append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", "translate(10,10)");

var node = svg.selectAll(".node"),
    link = svg.selectAll(".link");

var duration = 4000,
    timer = setInterval(update, duration);

var treeQueue = parentNode.children;
var currentNode = root;


function update() {
  if (treeQueue.length === 0) return clearInterval(timer);

  currentNode = treeQueue.shift();
  root.children = currentNode.parent.children
nodes = tree(root);

  // Add a new node to a random parent.
  var n = {id: currentNode.id, word: currentNode.word, parent: currentNode.parent, children: currentNode.children},
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
    .attr("x", function(d) { return d.parent.px + 3; })
    .attr("y", function(d) { return d.parent.py + 10;})
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
    .attr("x", function(d) { return d.px + 3; })
    .attr("y", function(d) { return d.py + 10; });
}
}