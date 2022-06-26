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

const Stats = styled.ul`
  ${({ theme }) => {
    const { media } = theme

    return css`
      ${media.desktop} {
        margin-left: 623px;
        padding-top: 150px;
      }
    `
  }}
`

export { GuideContainer, OutcomeContainer, Inner, Stats }
