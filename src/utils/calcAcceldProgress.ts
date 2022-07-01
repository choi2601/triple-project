import { END_POINT } from '@constants/formula'

const calcAcceldProgress = (currentProgress: number) => {
  if (currentProgress === END_POINT) {
    return 1
  }

  const acceldProgress = 1 - Math.pow(2, -10 * currentProgress)

  return acceldProgress
}

export { calcAcceldProgress }
