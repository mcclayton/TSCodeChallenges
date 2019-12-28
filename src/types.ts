export interface TreeNode<T> {
  left: TreeNode<T> | null,
  right: TreeNode<T> | null,
  val: T | any
}

export interface LinkedListNode<T> {
  next: LinkedListNode<T> | null,
  val: T | any
}
