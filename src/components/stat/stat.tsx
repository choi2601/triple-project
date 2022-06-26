import * as Style from './stat.style'
import { StatPropsType } from './stat.type'

function Stat({ unit, category }: StatPropsType) {
  return (
    <Style.StatContent>
      <strong>700{unit}</strong>
      &nbsp;
      {category}
    </Style.StatContent>
  )
}

export default Stat
