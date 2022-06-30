import { useLayoutEffect, useRef } from 'react'

import { calcStepTime } from '@utils/calcStepTime'
import { TOTAL_FRAME_DURATION } from '@constants/formula'

const useCount = (end: number, unit: string) => {
  const frame = useRef<number>(0)
  const count = useRef<HTMLElement | null>(null)

  const animate = () => {
    const CurrentProgress = frame.current / TOTAL_FRAME_DURATION
    const calcedProgress = calcStepTime(CurrentProgress)

    const currentCount = Math.round(calcedProgress * end)

    frame.current = requestAnimationFrame(animate)

    if (end <= currentCount) {
      cancelAnimationFrame(frame.current)
    }

    if (count.current) {
      count.current.innerHTML = `${currentCount}${unit}`
    }
  }

  useLayoutEffect(() => {
    animate()

    return () => {
      cancelAnimationFrame(frame.current)
    }
  })

  return { count }
}

export default useCount
