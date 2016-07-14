//Pseudocode
//value
//left
//right

//Methods
  //insert(value) find it's proper place;
    //if value < current
     // if left go left
     //this.left.insert.value;
     //else insert
     //insert create new tree add currents left
    //if value > current
      //if(right) go right
      //else insert new tree with value
      //add current's right
      //return ??
////////////////////////////////////////
//In-Order Binary Tree Traversal Psuedo code
//Pattern: Left, self, right
//if(!!this.left)
  //Traverse(this.left);
   //fn(this.val);
//if((!!this.right));
 //traverse(this.right);

 //return undefined
/////////////////////////////////////////










      /*
      BINARY SEARCH TREES
      Abstract data type
      A binary search tree is a tree with the additional constraints:
      - each node has only two child nodes (node.left and node.right)
      - all the values in the left subtree of a node are less than or equal to the value of the node
      - all the values in the right subtree of a node are greater than the value of the node
      *** Operations:
      bsTree.insert(value)
      => bsTree (return for chaining purposes)
      Insert value into correct position within tree
      bsTree.contains(value)
      => true/false
      Return true if value is in tree, false if not
      bsTree.traverseDepthFirst_inOrder(callback)
      => undefined
      Invoke the callback for every node in a depth-first in-order (visit left branch, then current node, than right branch)
      Note: In-Order traversal is most common type for binary trees. For binary search tree, this visits the nodes in ascending order (hence the name).
      bsTree.traverseDepthFirst_preOrder(callback)
      => undefined
      Invoke the callback for every node in a depth-first pre-order (visits current node before its child nodes)
      bsTree.traverseDepthFirst_postOrder(callback)
      => undefined
      Invoke the callback for every node in a depth-first post-order (visit the current node after its child nodes)
      bsTree.traverseBreadthFirst(callback)
      => undefined
      Invoke the callback for every node in a breadth-first order
      bsTree.checkIfFull()
      => true/false
      A binary tree is full if every node has either zero or two children (no nodes have only one child)
      bsTree.checkIfBalanced()
      => true/false
      For this exercise, let's say that a tree is balanced if the minimum height and the maximum height differ by no more than 1. The height for a branch is the number of levels below the root.
      *** Additional Exercises:
      A binary search tree was created by iterating over an array and inserting each element into the tree. Given a binary search tree with no duplicates, how many different arrays would result in the creation of this tree.
      */

      function BinarySearchTree (value) {
        this.value = value;
        this.left = null;
        this.right = null;
      }

      BinarySearchTree.prototype.insert = function(value) {
        if(value <= this.value) {
          if(this.left)
            this.left.insert(value);
          else this.left = new BinarySearchTree(value);
        }
        else {
          if (this.right)
            this.right.insert(value);
            else this.right = new BinarySearchTree(value);
        }
        return this;
      };
      // Time complexity:
      //O(log(n))
      // var bst = new BinarySearchTree();
      // bst.insert(3);
      // bst.insert(2);
      // bst.insert(4);
      // bst.insert(1);
      // bst.insert(5);
      //
      // console.log(bst);

      //In-Order Binary Tree Traversal Psuedo code
      //Pattern: Left, self, right
      //if(!!this.left)
        //Traverse(this.left);
         //fn(this.val);
      //if((!!this.right));
       //traverse(this.right);

       //return undefined
      /////////////////////////////////////////

      BinarySearchTree.prototype.contains = function(value) {
        if (this.value === value)
          return true;

        if(value < this.value) {          
          //if this.left doesn't exist return false
          //if it does exist, check if subtree contains value.
          return !!this.left && this.left.contains(value);
        }
        if(value > this.value) {
          //if this.right does not exist return false
          //if it does exist, check if subtree contains the value.
          return !!this.right && this.right.contains(value);
        }
        return false;
      };

var bsTree = new BinarySearchTree(10);
bsTree.insert(5).insert(15).insert(8).insert(3).insert(7).insert(20).insert(17).insert(9).insert(14);
console.log(bsTree);
var containsCheck = bsTree.contains(15);
console.log(containsCheck);
      // // Time complexity:
      //
      // BinarySearchTree.prototype.traverseDepthFirst_inOrder = function(fn) {
      //   // implement me...
      // };
      // // Time complexity:
      //
      // BinarySearchTree.prototype.traverseDepthFirst_preOrder = function(fn) {
      //   // implement me...
      // };
      // // Time complexity:
      //
      // BinarySearchTree.prototype.traverseDepthFirst_postOrder = function(fn) {
      //   // implement me...
      // };
      // // Time complexity:
      //
      // BinarySearchTree.prototype.traverseBreadthFirst = function(fn) {
      //   // implement me...
      // };
      // // Time complexity:
      //
      // BinarySearchTree.prototype.checkIfFull = function() {
      //   // implement me...
      // };
      // // Time complexity:
      //
      // BinarySearchTree.prototype.checkIfBalanced = function() {
      //   // implement me...
      // };
      // // Time complexity:
