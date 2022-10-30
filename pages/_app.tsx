import { SWRConfig } from 'swr';
//
import { EmptyLayout } from '@/components/layout';
import { AppPropsWithLayout } from '@/models/common';
// import axiosClient from '@/api/axios-client';
//
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const Layout = Component.Layout ?? EmptyLayout;
  return (
    // <SWRConfig value={{fetcher: url => axiosClient.get(url), shouldRetryOnError: false}}>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    // </SWRConfig>
  );
}

export default MyApp;
