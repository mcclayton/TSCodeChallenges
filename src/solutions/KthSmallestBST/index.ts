/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

import { TreeNode } from '../../types';

/**
 * KthSmallestBST
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
const kthSmallest = function(root: TreeNode<number>, k: number) {
  const arr: number[] = [];
  // Traverse the BST in-order and place elements into array
  // This results in an array sorted from least to greatest
  const inOrder = (node: TreeNode<number>, resArr: number[]) => {
    if (node === null) {
      return;
    }
    inOrder(node.left, resArr);
    resArr.push(node.val);
    inOrder(node.right, resArr);
  }
  inOrder(root, arr);

  // Since the array is sorted, to find the kth smallest number we only need
  // to index into the k-1 position of the array
  return arr[k-1];
};

export default kthSmallest;
