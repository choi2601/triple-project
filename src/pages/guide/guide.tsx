import * as Style from './guide.style'
import MockData from './guide.data.json'

import AppLogo from '@components/appLogo'
import Stat from '@components/stat'
import Award from '@components/award'

function Guide() {
  const { stats, awards } = MockData

  return (
    <Style.GuideContainer>
      <Style.OutcomeContainer>
        <Style.Inner>
          <AppLogo />
          <Style.Stats>
            {stats.map(({ id, unit, category, end }) => (
              <Stat
                key={`${id}-${category}`}
                unit={unit}
                category={category}
                end={end}
              />
            ))}
          </Style.Stats>
          <Style.Awards>
            {awards.map(({ id, market, record, imgSrc }) => (
              <Award
                key={`${id}-${market}`}
                market={market}
                record={record}
                imgSrc={imgSrc}
              />
            ))}
          </Style.Awards>
        </Style.Inner>
      </Style.OutcomeContainer>
    </Style.GuideContainer>
  )
}

export default Guide
