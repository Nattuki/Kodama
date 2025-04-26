export type ChordTreeNode = {
  value: string[]
  inversion: number
  children: Record<number, ChordTreeNode>
}
