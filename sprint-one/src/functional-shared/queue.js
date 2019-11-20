var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {
  	i: 0,
  	storage: {}
  };
  return _.extend(instance, queueMethods);
};

var queueMethods = {
	enqueue: function(val) {
		this.storage[this.i] = val;
		this.i += 1;
	},
	dequeue: function() {
		var poped;
		if (this.storage[0] !== undefined) {
			poped = this.storage[0];
			delete this.storage[0];
			this.storage = resort(this.storage);
			this.i -= 1;
			return poped;
		}
	},
	size: function() {
		return this.i;
	}
};

var resort = function(obj) {
	var result = {};
	for (var i = 0; i < Object.values(obj).length; i++) {
		result[i] = Object.values(obj)[i];
	}
	return result;
}
