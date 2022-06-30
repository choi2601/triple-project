const END_POINT = 1

const calcStepTime = (currentProgress: number) => {
  if (currentProgress === END_POINT) {
    return 1
  }
  const progressOfAppliedStep = currentProgress + (1 - currentProgress) * 0.1
  return progressOfAppliedStep
}

export { calcStepTime }
