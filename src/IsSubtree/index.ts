/**
 * Given two non-empty binary trees s and t, check whether tree t has
 * exactly the same structure and node values with a subtree of s.
 * A subtree of s is a tree consists of a node in s and all of this node's
 * descendants. The tree s could also be considered as a subtree of itself.
 *
 * Example:
 * Tree s:
 *          3
 *         / \
 *       4   5
 *      / \
 *     1   2
 * Tree t:
 *       4
 *      / \
 *     1   2
 *
 * Would return `true`, as t has the same structure and node values with a subtree of s.
 */

import { TreeNode } from '../types';

/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s: TreeNode, t: TreeNode) {
  const sTraversalMap: ITraversalMap= {};

  const inOrder = (root: TreeNode, map: ITraversalMap | null) => {
    if (root === null) {
      return "";
    }
    let str = "(";
    str += inOrder(root.left, map);
    str += root.val;
    str += inOrder(root.right, map);
    str += ")";
    // Finished traversal of subtree -- add the traversal path to the map if one
    // is provided
    if (map) {
      map[str] = true;
    }
    return str;
  }

  // Generate hash map of all in-order traversals of `s`
  inOrder(s, sTraversalMap);
  // Get the full in-order traversal of tree `t`
  const tTraversal = inOrder(t, null);
  // Return whether or not the full traversal of `t` is in the hashmap
  // of all traversals of `s`.
  return !!sTraversalMap[tTraversal];
};

interface ITraversalMap {
  [key: string]: boolean;
}

export default isSubtree;
