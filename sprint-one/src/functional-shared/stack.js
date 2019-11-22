var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  
  var someInstance = {
    i: 0,
    lastValue: '',
		storage : {}
	};
	return _.extend(someInstance, stackMethods);
};

var stackMethods = {
  push: function(value) {
    this.storage[this.i] = value;
    this.i += 1;
  },
  pop: function() {
    if (this.i > 0) {	
      this.i -= 1;
      var poped = this.storage[this.i];
			delete this.storage[this.i];
			return poped;
		}
	},
	size: function(){
		return this.i;
	}
};


