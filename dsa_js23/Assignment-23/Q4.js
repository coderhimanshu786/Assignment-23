//Complexity
//Time Complexity: O(NlogN)
// Space Complexity: O(N)

// Tree node class with left and right references
class Node {
    // Constructor of tree node
    constructor(key) {
    this.data = key; // Data of the node
    this.hd = 1000000; // Horizontal distance of the node
    this.left = null; 
    
    this.right = null;
    }
}

// Tree class
class Tree {
    // Parameterized tree constructor
    constructor(node) {
    // Root node of tree
    this.root = node;
    }

    // Method that prints the bottom view.
    bottomView() {
    if (this.root == null) return;

    // Initialize a variable 'hd' with 0 for the root element.
    let hd = 0;

    // TreeMap which stores key value pair sorted on key value
   let map = {};

    // Queue to store tree nodes in level order traversal
    let queue = [];

    // Assign initialized horizontal distance value to root node and add it to the queue.
    this.root.hd = hd;
    queue.push(this.root);

    // Loop until the queue is empty (standard level order loop)
    while (queue.length != 0) {
        let temp = queue.shift();

        // Extract the horizontal distance value from the dequeued tree node.
        hd = temp.hd;

        // Put the dequeued tree node to TreeMap having key as horizontal distance.
        map[hd] = temp.data;

        // If the dequeued node has a left child add it to the queue with a horizontal distance hd-1.
        if (temp.left != null) {
        temp.left.hd = hd - 1;
        queue.push(temp.left);
        }

        // If the dequeued node has a right child add it to the queue with a horizontal distance hd+1.
        if (temp.right != null) {
        temp.right.hd = hd + 1;
        queue.push(temp.right);
        }
    }

    for (const [key, value] of Object.entries(map).sort(
        (a, b) => a[0] - b[0]
    )) {
        console.log(value + " ");
    }
    }
}

// Example--1 
// let root = new Node(20);
// root.left = new Node(8);
// root.right = new Node(22);
// root.left.left = new Node(5);
// root.left.right = new Node(3);
// root.right.right = new Node(25);
// root.left.right.left = new Node(10);
// root.left.right.right = new Node(14);

//Example--2 
let root = new Node(20);
root.left = new Node(8);
root.right = new Node(22);
root.left.left = new Node(5);
root.left.right = new Node(3);
root.right.left = new Node(4);
root.right.right = new Node(25);
root.left.right.left = new Node(10);
root.left.right.right = new Node(14);

let tree = new Tree(root);

console.log("Bottom view of the " + "given binary tree : ");
tree.bottomView();