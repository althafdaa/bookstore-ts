import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import MainLayout from '../layouts/MainLayout';
import { store } from '../store';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </Provider>
  );
};

export default MyApp;
