import { useChordTree } from "../hooks/useChordTree"
import { useMidiInput } from "../hooks/useMidiInput"
import { P5Sketch } from "./p5"

export const MidiMonitor = () => {
  const { notes } = useMidiInput()
  const { findChord } = useChordTree()
  return (
    <div>
      <P5Sketch midiNotes={notes} />
      <h1>Chord:{findChord(notes)}</h1>
    </div>
  )
}
