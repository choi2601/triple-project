import styled, { css } from 'styled-components'

const StatContent = styled.li`
  ${({ theme }) => {
    const { color, animation, media } = theme

    return css`
      opacity: 0;
      color: ${color.$gray};
      ${animation('fadeInFromBottom', 700, 340, 'forwards', 'ease-out')};

      & > strong {
        font-weight: bold;
      }

      ${media.desktop} {
        margin-bottom: 20px;
        font-size: 36px;
        letter-spacing: -1px;
      }
    `
  }}
`

export { StatContent }
