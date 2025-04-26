import { useMemo } from "react"
import { loadChordTree } from "../../src/data/loadChordTree.ts"
import { ChordTree } from "../lib/chordTree.ts"
import { ChordTreeNode } from "../types/ChordTreeNode.ts"

export const useChordTree = () => {
  const rootNode = useMemo<ChordTreeNode>(() => loadChordTree(), [])
  const chordTree = useMemo(() => new ChordTree(rootNode), [rootNode])
  return { findChord: chordTree.findChord.bind(chordTree) }
}
