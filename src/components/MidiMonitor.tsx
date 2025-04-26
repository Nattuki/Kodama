import { useChordTree } from "../hooks/useChordTree"
import { useMidiInput } from "../hooks/useMidiInput"

export const MidiMonitor = () => {
  const { notes } = useMidiInput()
  const { findChord } = useChordTree()
  return (
    <div>
      <h2>chord</h2>
      <h3>{findChord(notes)}</h3>
    </div>
  )
}
