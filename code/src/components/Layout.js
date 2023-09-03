import { Container } from "@mui/material"
import Header from "./Header"
import '../theme/styles.css'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      { children }
    </>
  )
}

export default Layout