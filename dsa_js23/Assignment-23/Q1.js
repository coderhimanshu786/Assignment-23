//Complexity
//Time Complexity: O(N)
//Auxiliary Space: O(1)
	
	// function to return max of left subtree height or right subtree height
	function findDepthRec(tree, n, index)
	{
		if (index >= n || tree[index] == 'l')
			return 0;

		// calc height of left subtree (In preorder left subtree is processed before right)
		index++;
		let left = findDepthRec(tree, n, index);

		// calc height of right subtree
		index++;
		let right = findDepthRec(tree, n, index);

		return Math.max(left, right) + 1;
	}

	// Wrapper over findDepthRec()
	function findDepth(tree, n)
	{
		let index = 0;
		return (findDepthRec(tree, n, index));
	}
    //Example-1
    // let tree = "nlnll".split('');

	//Example-2
	 let tree = "nlnnlll".split('');
	let n = tree.length;
	console.log(findDepth(tree, n));
