var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  return _.extend(newTree, treeMethods);
};

var treeMethods = {};

treeMethods.addChild = function(value) {
	this.children.push({value: value,children:[], addChild: treeMethods.addChild});
	return value;
};

treeMethods.contains = function(target) {
	var result = false;
	function search(obj) {
		console.log(obj.value)
		if (obj.value === target) {
			return true;
		}
		if (obj.children.length === 0) {
			return false;
		}
		else {
			for(var i = 0; i < obj.children.length ; i++){
				result = search(obj.children[i]);
		    if(result === true){
		  		return result;
		   }
			}
		}
	}
	for(var i = 0; i < this.children.length;i++){
		result = search(this.children[i]);
		if(result === true){
			return result;
		}
	}
	return result;
};


// treeMethods.contains = function(target) {
// 	if(this.value === target) {
// 		return true;
// 	}
// 	if(this.children.length === 0){
// 		return false;
// 	}
// 	for(var i = 0; i < this.children.length; i++) {
// 		this.contains(target).call(this.children[i]);
// 	}

// }


/*
 * Complexity: What is the time complexity of the above functions?
 */
