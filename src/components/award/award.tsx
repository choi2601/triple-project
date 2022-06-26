import * as Style from './award.style'
import { AwardPropsType } from './award.type'

function Award({ market, record, imgSrc }: AwardPropsType) {
  return (
    <Style.AwardContent imgSrc={imgSrc}>
      {market}
      <br />
      {record}
    </Style.AwardContent>
  )
}

export default Award
