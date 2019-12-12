export interface TreeNode {
  left: TreeNode | null,
  right: TreeNode | null,
  val: number
}

export const isLeaf = (node: TreeNode) => (node && node.left === null && node.right === null);
