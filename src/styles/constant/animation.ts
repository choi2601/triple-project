import { css, Keyframes, keyframes } from 'styled-components'

interface KeyframesInfoType {
  [key: string]: Keyframes
  fadeInFromBottom: Keyframes
}

const keyframesInfo: KeyframesInfoType = {
  fadeInFromBottom: keyframes`
    from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
`,
}

const animation = (
  name: string,
  duration: number,
  delay = 0,
  fill = 'none',
) => css`
  animation-name: ${keyframesInfo[`${name}`]};
  animation-duration: ${duration}ms;
  animation-delay: ${delay}ms;
  animation-fill-mode: ${fill};
`

export default animation
