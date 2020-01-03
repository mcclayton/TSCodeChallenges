export interface TreeNode<T = any> {
  left: TreeNode<T> | null,
  right: TreeNode<T> | null,
  val: T
}

export interface LinkedListNode<T = any> {
  next: LinkedListNode<T> | null,
  val: T
}
