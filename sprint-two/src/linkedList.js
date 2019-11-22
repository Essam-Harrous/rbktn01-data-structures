//linked list class
//it return an isntance of list.
var LinkedList = function() {
  var list = {};

  //list.head and list.tail must start with null
  list.head = null;
  list.tail = null;

  //add object of new value to the list.
  list.addToTail = function(value) {

    //check if the list is empty
    //it declare the tail and the head with the same node
    //else it will update the next of head to the new node
    //and update the tail to be the new node
    if(list.head === null){
      list.tail = Node(value);
      list.head = Node(value);
    }else {
      var updateNext = function(node){
        if(node.next === null){
          node.next = Node(value);
          list.tail = Node(value);
        }else {
          updateNext(node.next);
        }
      }
      updateNext(list.head);
    }

  };

  //remove the first node from the list
  //it return its value
  list.removeHead = function() {
    var result = list.head.value;
    list.head = list.head.next;
    return result;
  };

  //search for the target
  list.contains = function(target) {

    //it use recursion to search through the nodes
    function search(list){
      //check if the value match the target
      //return true.
      if(target === list.value){
        return true;
      }

      //check if we reach the tail
      //return false
      if(list.next === null){
        return false;
      }

      //otherwise it will call the funciton again
      //on the next node.
      return search(list.next)
    }
    return search(list.head);
  };


  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
