import { ChordTreeNode } from "../types/ChordTreeNode"
import { midiToNoteName, shiftMidi } from "./midiUtils"
import { intervalMap } from "../data/intervals"

export class ChordTree {
  constructor(private root: ChordTreeNode) {
    this.root = root
  }

  findChord(midiNotes: number[]): string | null {
    if (midiNotes.length === 0) return null

    const sorted = [...new Set(midiNotes)].sort((a, b) => a - b)
    const bassMidi = sorted[0]
    const intervals = sorted.slice(1).map((n) => (n - bassMidi) % 12)

    let node: ChordTreeNode | undefined = this.root
    let lastMatchedNode: ChordTreeNode | null = null
    for (const interval of intervals) {
      node = node?.children?.[intervalMap[interval]]
      if (!node) {
        lastMatchedNode = null
        break
      }
      lastMatchedNode = node
    }

    const bassNote = midiToNoteName(bassMidi)

    if (!lastMatchedNode || lastMatchedNode.value === undefined)
      return `${bassNote} ?`

    const chordName = lastMatchedNode.value[0]
    const inversion = lastMatchedNode.inversion

    if (inversion === undefined) {
      return `${bassNote}${chordName}`
    } else {
      const rootMidi = shiftMidi(bassMidi, inversion)
      const rootNote = midiToNoteName(rootMidi)
      return `${rootNote}${chordName}/${bassNote}`
    }
  }
}
