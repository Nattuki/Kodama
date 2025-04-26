import { NOTE_NAMES } from "../data/noteNames"

export const midiToNoteName = (midi: number): string => {
  return NOTE_NAMES[midi % 12]
}

export const shiftMidi = (base: number, semitones: number): number => {
  return base + semitones
}
