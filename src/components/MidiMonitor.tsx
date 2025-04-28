import { useChordTree } from "../hooks/useChordTree"
import { useMidiInput } from "../hooks/useMidiInput"

export const MidiMonitor = () => {
  const { notes } = useMidiInput()
  const { findChord } = useChordTree()
  return (
    <div>
      <h1>chord:{notes}</h1>
      <h1>{findChord(notes)}</h1>
    </div>
  )
}
