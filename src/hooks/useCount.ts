import { useLayoutEffect, useRef } from 'react'

import { calcAccelerateProgress } from '@/utils/calcAccelerateProgress'

import {
  DEFAULT_FRAME_INTERVAL,
  TOTAL_FRAME_DURATION,
} from '@constants/formula'

const useCount = (end: number, unit: string) => {
  const count = useRef<HTMLElement | null>(null)
  const frame = useRef(0)

  useLayoutEffect(() => {
    const timerId = setInterval(() => {
      frame.current++
      const progress = frame.current / TOTAL_FRAME_DURATION
      const acceleratedProgress = calcAccelerateProgress(progress)
      const currentCount = Math.round(end * acceleratedProgress)

      if (count.current) {
        count.current.innerHTML = `${currentCount}${unit}`
      }

      if (currentCount === end) {
        clearInterval(timerId)
      }
    }, DEFAULT_FRAME_INTERVAL)

    return () => {
      clearInterval(timerId)
    }
  })

  return { count }
}

export default useCount
