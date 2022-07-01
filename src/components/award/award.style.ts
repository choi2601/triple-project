import styled, { css } from 'styled-components'

import { AwardContentPropsType } from './award.type'

const AwardContent = styled.li<AwardContentPropsType>`
  ${({ theme, imgSrc }) => {
    const { color, animation, media } = theme

    return css`
      display: inline-block;
      background-image: url(${imgSrc});
      background-position: left top;
      background-repeat: no-repeat;
      opacity: 0;
      color: ${color.$gray800};
      font-weight: bold;
      ${animation('shallowFadeInFromBottom', 700, 100, 'forwards', 'ease-out')};

      ${media.desktop} {
        height: 54px;
        background-size: 54px 54px;
        margin-right: 39px;
        padding: 5px 0 5px 62px;
        font-size: 14px;
        line-height: 22px;
      }
    `
  }}
`

export { AwardContent }
