import styled, { css } from 'styled-components'

const GuideContainer = styled.section``

const OutcomeContainer = styled.section`
  position: relative;
  overflow: hidden;
  font-family: sans-serif;
`

const Inner = styled.div`
  ${({ theme }) => {
    const { media } = theme

    return css`
      position: relative;
      margin: 0 auto;

      ${media.desktop} {
        width: 1040px;
        height: auto;
      }
    `
  }}
`

const AppLogo = styled.div`
  ${({ theme }) => {
    const { color, animation, media } = theme

    return css`
      background-image: url('/images/triple2x.png');
      background-repeat: no-repeat;
      text-align: center;
      color: ${color.$gray700};
      ${animation('fadeInFromBottom', 700, 20, 'forwards', 'ease-in-out')};

      ${media.desktop} {
        width: 400px;
        height: 338px;
        padding-top: 280px;
        background-size: 400px 338px;
        font-size: 15px;
      }
    `
  }}
`

export { GuideContainer, OutcomeContainer, Inner, AppLogo }
