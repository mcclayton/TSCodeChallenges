export interface TreeNode<T = any> {
  left: TreeNode<T> | null,
  right: TreeNode<T> | null,
  next: TreeNode<T> | null,
  val: T
};

/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
// Total time complexity is O(n * h) where h is the height of the tree and n is number of nodes
// This is an adaptation of the recursive level-order traversal here: https://www.geeksforgeeks.org/level-order-tree-traversal/
const connect = function (root: TreeNode) {
  const heightOfTree = getHeight(root);

  // This is the only O(1) space we need to track
  // nodes on a given level
  let tmpNode: TreeNode = null;

  // O(n) time complexity since we visit every node
  const connectOnLevel = (node: TreeNode, level: number) => {
    if (node === null) {
      return;
    }
    // We reached the level we care about
    if (level === 1) {
      // If the temp node has not been set, this means we are assigning
      // the first node seen on this level
      if (tmpNode === null) {
        tmpNode = node;
      } else {
        // If the temp node has been set, we must point it to the next node seen on this level
        // and then update the temp node to this node
        tmpNode.next = node;
        tmpNode = node;
      }
      // Assign the temo node's next pointer to null so that the last node on a level
      // is pointing to null
      tmpNode.next = null;
    }

    // Recurse down the left subtree, then right subtree decrementing the level
    connectOnLevel(node.left, level - 1);
    connectOnLevel(node.right, level - 1);
  }

  for (let i = 0; i < heightOfTree; i++) {
    // For each level, reset the temp node
    tmpNode = null;
    connectOnLevel(root, i + 1);
  }
  return root;
};

// Gets the height of a tree in O(n) time
const getHeight = (node: TreeNode, level = 0): number => {
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

export default connect;
