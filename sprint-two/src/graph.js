

// Instantiate a new graph
var Graph = function() {
	this.nodes = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
	console.log(this)
	this.nodes[node] = {};
	this.nodes[node].value = node;
	this.nodes[node].edges = {};
	
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
	if(this.nodes[node] !== undefined) {
		return true;
	}
	return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
	var deletedEgdes = this.nodes[node].edges;
	delete this.nodes[node];
	for(var key in deletedEgdes){
		delete this.nodes[key].edges[node];
	}
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
	if(this.nodes[fromNode].edges[toNode] === toNode){
		return true;
	}
	return false;
};

// Connects two nodes in a graph by adding an edge between thSem.
Graph.prototype.addEdge = function(fromNode, toNode) {
	this.nodes[fromNode].edges[toNode] = toNode;
	this.nodes[toNode].edges[fromNode] = fromNode;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
	delete this.nodes[fromNode].edges[toNode]
	delete this.nodes[toNode].edges[fromNode]
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
	console.log(this.nodes)
	for(var key in this.nodes) {
		cb(this.nodes[key].value);
	}
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


