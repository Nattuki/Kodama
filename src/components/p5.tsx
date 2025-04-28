import p5 from "p5"
import { useEffect, useRef } from "react"

type Props = {
  midiNotes: number[]
}

export const P5Sketch = ({ midiNotes }: Props) => {
  const sketchRef = useRef<HTMLDivElement>(null)
  const p5Instance = useRef<p5 | null>(null)
  const midiNotesRef = useRef<number[]>(midiNotes)

  useEffect(() => {
    midiNotesRef.current = midiNotes
    p5Instance.current?.redraw()
  }, [midiNotes])

  useEffect(() => {
    const sketch = (p: p5) => {
      p.setup = () => {
        p.createCanvas(400, 400)
      }

      p.draw = () => {
        p.background(220)
        p.ellipse(p.width / 2, p.height / 2, 50, 50)
      }
    }

    p5Instance.current = new p5(sketch, sketchRef.current!)

    return () => {
      p5Instance.current?.remove()
    }
  }, [])

  return <div ref={sketchRef}></div>
}
