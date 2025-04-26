export type ChordTreeNode = {
  children?: Record<string, ChordTreeNode>
  value?: string[]
  inversion?: number
}
