//Complexity
//Time Complexity: O(N)
// Space Complexity: O(N)


	// binary tree with left and right
	
	class Node
	{
		constructor(item) {
		this.left = null;
		this.right = null;
		this.data = item;
		}
	}
	
	let max_level = 0;
	
	let root;

	// Recursive function to print right view of a binary tree.
	function rightViewUtil(node, level) {

		// Base Case
		if (node == null)
			return;

		// If this is the last Node of its level
		if (max_level < level) {
			console.log(node.data + " ");
			max_level = level;
		}

		// Recursion for right subtree first, then left subtree
		rightViewUtil(node.right, level + 1);
		rightViewUtil(node.left, level + 1);
	}

	function rightView()
	{
		rightview(root);
	}

	// A wrapper over rightViewUtil()
	function rightview(node) {

		rightViewUtil(node, 1);
	}
	
    //Example--1  
	// root = new Node(1);
	// root.left = new Node(2);
	// root.right = new Node(3);
	// root.left.left = new Node(4);
	// root.left.right = new Node(5);
	// root.right.left = new Node(6);
	// root.right.right = new Node(7);
	// root.right.left.right = new Node(8);


    //Example--2
    root = new Node(1);
	root.left = new Node(8);
	root.left.left = new Node(7);

	rightView();