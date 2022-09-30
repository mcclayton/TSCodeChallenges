import Queue from '../../data_structures/Queue';
import { TreeNode } from '../../types';

/**
 * BinaryTreeLevelOrderTraversal
 * Example:
 * Given binary tree [3,9,20,null,null,15,7]
 *
 *     3
 *    / \
 *   9  20
 *     /  \
 *    15   7
 *
 * Return:
 * [
 *  [3],
 *  [9,20],
 *  [15,7]
 * ]
 */
const levelOrderTraversal = function (root: TreeNode<number>) {
  const levelOrder: number[][] = [];

  // Early return if no root provided
  if (!root) {
    return levelOrder;
  }

  const _pushAtLevel = (val: number, level: number) => {
    if (levelOrder[level] === undefined) {
      levelOrder[level] = [val];
    } else {
      levelOrder[level].push(val);
    }
  };

  const queue = new Queue<NodeWithLevel>();

  // Add node with level info to queue
  queue.add(nodeWithLevel(root, 0));

  // Breadth-first traversal using queue
  while (!queue.isEmpty()) {
    // Get/remove node and level from queue
    const { node, level } = queue.poll();

    // For non-null levels
    if (node !== null) {
      // Update the resulting matrix with this node's value at this level
      _pushAtLevel(node.val, level);
      // Enqueue this node's children
      queue.add(nodeWithLevel(node.left, level + 1));
      queue.add(nodeWithLevel(node.right, level + 1));
    }
  }

  return levelOrder;
};

const nodeWithLevel = (node: TreeNode<number> | null, level: number) => ({
  node,
  level,
});

interface NodeWithLevel {
  node: TreeNode<number> | null;
  level: number;
}

export default levelOrderTraversal;
