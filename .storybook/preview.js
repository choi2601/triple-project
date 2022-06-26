import { ThemeProvider } from 'styled-components'
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'

import GlobalStyle from '../src/styles/globalStyle'
import theme from '../src/styles/theme'

export const decorators = [
  (Story) => (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    </>
  ),
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewport: {
    viewports: MINIMAL_VIEWPORTS,
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
