var Stack = function() {
  var someInstance = {};
  var i = 0;
  var lastValue ;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[i] = value;
    lastValue = value;
    i++;
  };

  someInstance.pop = function() {
    var popped = lastValue;
    if(i > 0){
      i--;
      delete storage[i];
      lastValue = storage[i - 1];
      return popped;
    }
  };

  someInstance.size = function() {
    return i;
  };
  return someInstance;
};
