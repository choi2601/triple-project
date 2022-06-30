import * as Style from './stat.style'
import { StatPropsType } from './stat.type'

import useCount from '@hooks/useCount'

function Stat({ unit, category, end }: StatPropsType) {
  const { count } = useCount(end, unit)

  return (
    <Style.StatContent>
      <strong ref={count} />
      &nbsp;
      {category}
    </Style.StatContent>
  )
}

export default Stat
