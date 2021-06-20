import { TreeNode } from '../../types';

/**
 * MaximumLevelSumOfBinaryTree
 * @param {TreeNode | null} root
 * @return {number} Level with maximum sum
 */
function maximumLevelSumOfBinaryTree(root: TreeNode | null): number {
  const levelSumMap = traverse(root, 1, {});
  const res = Object.entries(levelSumMap).reduce((maxSumMap: Record<string, any> | null, [levelKey, sum]) => {
    const level = Number.parseInt(levelKey, 10);
    if (maxSumMap === null) {
      return { level, sum };
    } else if (sum > maxSumMap.sum) {
      return { level, sum };
    }
    return maxSumMap;
  }, null);

  return res.level;
};

function traverse(node: TreeNode | null, level: number, levelSumMap: Record<number, number>): Record<number, number> {
  if (node.left !== null) {
    traverse(node.left, level+1, levelSumMap);
  }
  if (node.right !== null) {
    traverse(node.right, level+1, levelSumMap);
  }
  // This is a leaf node, add it to the map
  levelSumMap[level] = levelSumMap[level] ? levelSumMap[level] + node.val : node.val;
  return levelSumMap;
}

export default maximumLevelSumOfBinaryTree;
