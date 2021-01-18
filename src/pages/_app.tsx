import 'normalize.css';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { DarkTheme, GlobalStyles } from '@styles/index';
import Layout from '@components/Layout';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
