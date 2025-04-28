import p5 from "p5"
import { useEffect, useRef } from "react"

export const P5Sketch = () => {
  const sketchRef = useRef<HTMLDivElement>(null)

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

    const p5Instance = new p5(sketch, sketchRef.current!)

    return () => {
      p5Instance.remove()
    }
  }, [])

  return <div ref={sketchRef}></div>
}
