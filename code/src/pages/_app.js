import Layout from "@/components/Layout";
import { ThemeProvider } from "@mui/material";
import theme from "@/theme/theme";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SessionProvider } from "next-auth/react"

const MyApp = ({ Component, pageProps: { session, ...pageProps } }) => {

  return (
    <SessionProvider>
      <ThemeProvider theme={theme}>
        <ToastContainer />
        <Layout><Component {...pageProps} /></Layout>
      </ThemeProvider>
    </SessionProvider>
  );
}

export default MyApp;