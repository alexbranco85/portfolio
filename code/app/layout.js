"use client"
import { Box, ThemeProvider } from '@mui/material'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import './globals.css'
import NextAuthSessionProvider from './providers/sessionProvider'
import theme from './theme/theme'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n'

export default function RootLayout({ children }) {
  console.log('children', children)
  return (
    <html lang="en">
      <head>
        <title>Alex Branco | Portfólio</title>
        <meta name="author" content="Alex Branco" />
        <meta
          name="Alex Branco | Portfólio"
          content="Portfólio do designer e desenvolvedor Front-End Alex Branco." />
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <I18nextProvider i18n={i18n} defaultNS={'translation'}>
            <NextAuthSessionProvider>
              <Header />
              <Box sx={{
                // backgroundImage: 'url("bg-home.png")',
                // backgroundPosition: 'center',
                // backgroundSize: 'cover',
                // width: '100vw',
                // boxSizing: 'border-box',
                // height: 'calc(100vh - 37.5px)',
                // pl: '20px',
                // overflow: 'auto',
                // alignContent: 'flex-start'
              }}
              className="boxContainer">
                {children}
              </Box>
              <Footer />
            </NextAuthSessionProvider>
          </I18nextProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
