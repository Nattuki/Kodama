import { ChordTreeNode } from "../types/ChordTreeNode"
import { midiToNoteName, shiftMidi } from "./midiUtils"

export class ChordTree {
  constructor(private root: ChordTreeNode) {}

  findChord(midiNotes: number[]): string | null {
    if (midiNotes.length === 0) return null

    const sorted = [...new Set(midiNotes)].sort((a, b) => a - b)
    const bassMidi = sorted[0]
    const intervals = sorted.slice(1).map((n) => (n - bassMidi) % 12)

    let node: ChordTreeNode | undefined = this.root
    let lastMatchedNode: ChordTreeNode | null = null
    for (const i of intervals) {
      node = node?.children?.[i]
      if (!node) break
      if (node.value.length > 0) lastMatchedNode = node
    }

    if (!lastMatchedNode) return null

    const chordName = lastMatchedNode.value[0]
    const inversion = lastMatchedNode.inversion
    const bassNote = midiToNoteName(bassMidi)

    if (inversion === 0) {
      return `${bassNote}${chordName}`
    } else {
      const rootMidi = shiftMidi(bassMidi, inversion)
      const rootNote = midiToNoteName(rootMidi)
      return `${rootNote}${chordName}/${bassNote}`
    }
  }
}
