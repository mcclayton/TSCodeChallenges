import { TreeNode } from '../../types';

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const subtreeWithAllDeepest = function(root: TreeNode) {
  const dfs = (node: TreeNode, level = 0): Result => {
    if (node === null) {
      return new Result(node, level);
    }
    // Recurse to get the height of the left/right subtrees
    const leftSub = dfs(node.left, level + 1);
    const rightSub = dfs(node.right, level + 1);

    if (leftSub.level > rightSub.level) {
      // The left subtree has the largest depth level seen so far, so
      // return the right subtree's deepest node with its level
      return new Result(leftSub.node, leftSub.level);
    } else if (rightSub.level > leftSub.level) {
      // The right subtree has the largest depth level seen so far, so
      // return the right subtree's deepest node with its level
      return new Result(rightSub.node, rightSub.level);
    } else {
      // The max depths of the subtrees at this point are equal, so this
      // current node (the parent of these two subtrees) is the node with the largest depth
      // containing all nodes in subtree with the deepest level *seen so far*.)

      // Doesn't matter if we use rightSub.level or leftSub.level since they are equal
      return new Result(node, rightSub.level);
    }
  }

  return dfs(root).node;
};

class Result {
  node: TreeNode;
  level: number;
  constructor(node: TreeNode, level: number) {
    this.node = node;
    this.level = level;
  }
}

export default subtreeWithAllDeepest;
