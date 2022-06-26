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

export { GuideContainer, OutcomeContainer, Inner }
