

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tuples = [k, v];
  var buckets = [];
  buckets.push(tuples);
  if(this._storage.get(index) !== undefined){
  	this._storage.get(index).forEach(function(tuple){
  		if(tuple[0] === k){
  			tuple[1] = v;
  			return;
  		}
  	})
  	buckets = this._storage.get(index).concat(buckets)
  }
  this._storage.set(index, buckets); 
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var currentBucket = this._storage.get(index);
  if(currentBucket !== undefined) {
  	for (var i = 0; i < currentBucket.length; i++) {
  		if(currentBucket[i][0] === k) {
  			return currentBucket[i][1];
  		}
  	} 	
  }

};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


