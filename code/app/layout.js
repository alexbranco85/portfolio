"use client"
import { Box, ThemeProvider } from '@mui/material'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import './globals.css'
import NextAuthSessionProvider from './providers/sessionProvider'
import theme from './theme/theme'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n'

export const metadata = {
  title: 'Alex Branco | Portfólio',
  description: 'Programador FullStack e Designer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <I18nextProvider i18n={i18n} defaultNS={'translation'}>
            <NextAuthSessionProvider>
              <Header />
              <Box sx={{ width: '100vw', boxSizing: 'border-box', maxHeight: 'calc(100vh - 37.5px)', overflow: 'auto' }}>{children}</Box>
              <Footer />
            </NextAuthSessionProvider>
          </I18nextProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
