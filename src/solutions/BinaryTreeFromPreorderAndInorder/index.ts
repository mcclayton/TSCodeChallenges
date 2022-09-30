/**
 * Given preorder and inorder traversal of a tree, construct the binary tree.
 *
 * Example:
 *
 * preorder = [3,9,20,15,7]
 * inorder = [9,3,15,20,7]
 * Result:
 *     3
 *    / \
 *   9  20
 *     /  \
 *    15   7
 *
 */
const buildTree = function (preorder: number[], inorder: number[]) {
  // Keep track of index into preorder array
  let preIndex = 0;

  const buildSubTree = (inorder: number[]) => {
    // If the inorder array is empty, then we are at a leaf node
    if (inorder.length === 0) {
      return null;
    }
    // Create node for current node, and increment the global
    // index into the preorder array
    let currNode = new TreeNode(preorder[preIndex++]);
    // Index of the root node in the inorder array O(n)
    const idxOfRoot = inorder.indexOf(currNode.val);

    // Left and right values of the root value in the inorder array
    const leftSubValues = inorder.slice(0, idxOfRoot);
    const rightSubValues = inorder.slice(idxOfRoot + 1);

    currNode.left = buildSubTree(leftSubValues);
    currNode.right = buildSubTree(rightSubValues);
    return currNode;
  };

  const rootNode = buildSubTree(inorder);
  // We return the built root node in O(n^2) time
  // For each node `n` in preorder, we have to linear search for `n` in inorder
  return rootNode;
};

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(val: number) {
    this.val = val;
    this.left = this.right = null;
  }
}

export default buildTree;
