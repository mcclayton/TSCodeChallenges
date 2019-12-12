/**
 * Given a binary tree and a sum, determine if the tree has a root-to-leaf path
 * such that adding up all the values along the path equals the given sum.
 * Note: A leaf is a node with no children.
 *
 * Example:
 *          5
 *         / \
 *       4   8
 *      /   / \
 *     11  13  4
 *    /  \      \
 *   7    2      1
 *
 * Would return `true`, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.
 */

import { isLeaf, TreeNode } from './helpers';

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

 /**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
const hasPathSum = function(root: TreeNode, sum: number) {
  // If initial tree is empty, return
  if (root == null)
    return false;

  let res = false;
  function preOrderTraverse(node: TreeNode, sumSoFar = 0) {
    if (node == null) {
      return;
    }

    sumSoFar += node.val;
    if (isLeaf(node)) {
      res = res || sum === sumSoFar;
    }
    preOrderTraverse(node.left, sumSoFar);
    preOrderTraverse(node.right, sumSoFar);
  }

  preOrderTraverse(root, 0);
  return res;
};

export default hasPathSum;
