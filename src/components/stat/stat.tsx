import * as Style from './stat.style'
import { StatProps } from './stat.type'

function Stat({ unit, category }: StatProps) {
  return (
    <Style.StatContent>
      <strong>700{unit}</strong>
      &nbsp;
      {category}
    </Style.StatContent>
  )
}

export default Stat
