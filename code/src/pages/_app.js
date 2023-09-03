import Layout from "@/components/Layout";
import { ThemeProvider } from "@mui/material";
import theme from "@/theme/theme";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Layout><Component {...pageProps} /></Layout>
    </ThemeProvider>
  );
}

export default MyApp;