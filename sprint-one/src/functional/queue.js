var Queue = function() {
  var someInstance = {};
  var i = 0;
  var popped;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.enqueue = function(value) {
    storage[i] = value;
    i++;
  };

  someInstance.dequeue = function() {
    console.log(i, storage);
    if(storage[0] !== undefined){
      popped = storage[0];
      delete storage[0];
      i--;  
      storage = resort(storage);
      return popped;
    }
  };

  someInstance.size = function() {
    return i;
  };

  return someInstance;
};

var resort = function(obj){
  var sortedObject = {};
  for(var i = 0; i < Object.values(obj).length; i++){
    sortedObject[i] = Object.values(obj)[i];
  }
  return sortedObject;
};