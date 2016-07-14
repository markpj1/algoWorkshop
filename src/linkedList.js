
//constructor function
function node (value) {
  this.next = null;
  this.value = value;
}

//node prototype
function LinkedList (headValue) {
  if(headValue === undefined) console.log('Must provide value');
  this.head = new Node(headValue);
  this.tail = this.head;
}

LinkedList.prototype.forEach = function(callBack) {
  var node = this.head;
  while (node) {
    callBack(node.value);
    node = node.next;
  }
};

LinkedList.prototype.print = function() {
  var result = [];
  this.forEach(function (value) {
    result.push(value);
  });
  return result.join(', ');
};
