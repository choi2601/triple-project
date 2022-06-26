import * as Style from './guide.style'

import AppLogo from '@components/appLogo'
import Stat from '@components/stat'

function Guide() {
  return (
    <Style.GuideContainer>
      <Style.OutcomeContainer>
        <Style.Inner>
          <AppLogo />
          <Style.Stats>
            <Stat unit="만 명" category="여행자" />
            <Stat unit="만 개" category="여행 리뷰" />
            <Stat unit="만 개" category="여행 일정" />
          </Style.Stats>
        </Style.Inner>
      </Style.OutcomeContainer>
    </Style.GuideContainer>
  )
}

export default Guide
