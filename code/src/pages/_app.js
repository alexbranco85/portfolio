import Layout from "@/components/Layout";
import { ThemeProvider } from "@mui/material";
import theme from "@/theme/theme";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer />
      <Layout><Component {...pageProps} /></Layout>
    </ThemeProvider>
  );
}

export default MyApp;