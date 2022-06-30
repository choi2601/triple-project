const END_POINT = 1

const calcStepTime = (currentProgress: number) => {
  if (currentProgress === END_POINT) {
    return 1
  }
  const progressOfAppliedStep =
    currentProgress + (END_POINT - currentProgress) * 0.97
  return progressOfAppliedStep
}

export { calcStepTime }
