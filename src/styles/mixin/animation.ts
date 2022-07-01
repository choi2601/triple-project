import { css, Keyframes, keyframes } from 'styled-components'

interface KeyframesInfoType {
  [key: string]: Keyframes
  fadeInFromBottom: Keyframes
  shallowFadeInFromBottom: Keyframes
}

const keyframesInfo: KeyframesInfoType = {
  fadeInFromBottom: keyframes`
    from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
  `,
  shallowFadeInFromBottom: keyframes`
    0% {
    opacity: 0;
    transform: translateY(10px);
    }
    50%{
    opacity: 0;
    transform: translateY(8px);
    } 
    90%{
    opacity: 0.2;
    }
    100% {
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
  timing = 'ease',
) => css`
  animation-name: ${keyframesInfo[`${name}`]};
  animation-duration: ${duration}ms;
  animation-delay: ${delay}ms;
  animation-fill-mode: ${fill};
  animation-timing-function: ${timing};
`

export default animation
