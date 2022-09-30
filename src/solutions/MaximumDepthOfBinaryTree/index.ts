import { TreeNode } from '../../types';

/**
 * MaximumDepthOfBinaryTree
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxDepth = function (root: TreeNode) {
  return getHeight(root, 0);
};

const getHeight = (node: TreeNode | null, level = 0): number => {
  // If we reach a leaf node, return the level
  if (node === null) {
    return level;
  }
  // Recurse to get the height of the left/right subtrees
  const leftH = getHeight(node.left, level + 1);
  const rightH = getHeight(node.right, level + 1);

  // As we pop off the recursion stack frames, we return the higher of the two nodes
  return Math.max(leftH, rightH);
};

export default maxDepth;
