export type TreeNode<T> = {
  value: T
  children: Map<number, TreeNode<T>>
}
