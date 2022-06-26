import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      $gray: string
      $gray700: string
      $gray800: string
    }
    media: {
      desktop: string
    }
    animation: (
      name: string,
      duration: number,
      delay?: number,
      fill?: string,
      timing?: string,
    ) => FlattenSimpleInterpolation
  }
}
