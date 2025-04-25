import { useMidiInput } from "../hooks/useMidiInput"

export const MidiMonitor = () => {
  const { notes } = useMidiInput()
  return (
    <div>
      <h2>当前按下的 MIDI 音符:</h2>
      <pre>{JSON.stringify(notes, null, 2)}</pre>
    </div>
  )
}
