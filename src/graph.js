function Graph () {
  this._nodes = {};
}

Graph.prototype.addNode = function (value) {
  //first check for value
  if (value === undefined) return;
  //value exists add to object _.nodes with bracket notation.
  this._nodes[value] = this._nodes[value] || [];
};

Graph.prototype.addEdge = function(value1, value2) {
  //check for values
  if(!this._nodes[value1] || !this._nodes[value2])
    return 'Invalid node value';
    //push values into array _.nodes[value]
    this._nodes[value1].push(value2);
    this._nodes[value2].push(value1);
};

var myGraph = new Graph();

myGraph.addNode('pickles');
myGraph.addNode('dobbey');
myGraph.addNode('gibson');

myGraph.addEdge('dobbey', 'pickles');
myGraph.addEdge('gibson', 'dobbey');
myGraph.addEdge('gibson', 'pickles');






console.dir(myGraph);
