//Complexity
//Time Complexity: O(N)
// Space Complexity: O(N)


// Class containing left and right
class Node
{
	constructor(item)
	{
		this.data = item;
		this.left = null;
		this.right = null;
	}
}

// Class to print the left view
let root ;
let max_level = 0;

// Recursive function to print left view
function leftViewUtil(node, level)
{
	
	// Base Case
	if (node == null)
	{
		return;
	}
	
	// If this is the first node of its level
	if (max_level < level)
	{
		console.log(" " + node.data);
		max_level = level;
	}
	
	// Recur for left and right subtrees
	leftViewUtil(node.left, level + 1);
	leftViewUtil(node.right, level + 1);
}

// A wrapper over leftViewUtil()
function leftView()
{
	leftViewUtil(root, 1);
}

//Example--1  Given tree
// root = new Node(4)
// root.left = new Node(5)
// root.right = new Node(2)
// root.right.right = new Node(1)
// root.right.left = new Node(3)
// root.right.right.left = new Node(6)
// root.right.right.right = new Node(7)

//Example--2 Given tree
root = new Node(1)
root.left = new Node(2)
root.right = new Node(3)
root.left.right = new Node(4)
root.left.right.right = new Node(5)
root.left.right.right.right = new Node(6)

leftView();