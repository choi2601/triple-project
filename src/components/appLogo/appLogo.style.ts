import styled, { css } from 'styled-components'

const AppLogoContent = styled.div`
  ${({ theme }) => {
    const { color, animation, media } = theme

    return css`
      background-image: url('/images/triple2x.png');
      background-repeat: no-repeat;
      text-align: center;
      color: ${color.$gray700};
      ${animation('fadeInFromBottom', 700, 50, 'forwards', 'ease-out')};

      ${media.desktop} {
        position: absolute;
        top: 150px;
        width: 400px;
        height: 338px;
        padding-top: 280px;
        background-size: 400px 338px;
        font-size: 15px;
      }
    `
  }}
`

export { AppLogoContent }
