import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

import App from '@/App'

import GlobalStyle from '@styles/globalStyle'
import theme from '@styles/theme'

const container = document.getElementById('root') as HTMLElement
const root = createRoot(container)

root.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </StrictMode>,
)
