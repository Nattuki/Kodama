import { useEffect, useState } from "react"

export const useMidiInput = () => {
  const [notes, setNotes] = useState<number[]>([])

  useEffect(() => {
    const activeNotes = new Set<number>()
    const inputs: WebMidi.MIDIInput[] = []

    const handleMIDIMessage = (event: WebMidi.MIDIMessageEvent) => {
      const [command, note, velocity] = event.data
      console.log(command, note, velocity)
      if (command === 144 && velocity > 0) {
        activeNotes.add(note)
      } else if (command === 128 || (command === 144 && velocity === 0)) {
        activeNotes.delete(note)
      }

      setNotes(Array.from(activeNotes).sort((a, b) => a - b))
    }

    ;(async () => {
      try {
        const access = await navigator.requestMIDIAccess()
        for (const input of access.inputs.values()) {
          input.onmidimessage = handleMIDIMessage
          inputs.push(input)
        }
      } catch (error) {
        console.error("failed to initialize:", error)
      }
    })()

    return () => {
      inputs.forEach((input) => {
        input.onmidimessage = null
      })
    }
  }, [])

  return { notes }
}
