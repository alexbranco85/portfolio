import { Container } from "@mui/material"
import Header from "./Header"
import '../theme/styles.css'
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div style={{paddingLeft: '20px'}}>{children}</div>
      <Footer />
    </>
  )
}

export default Layout