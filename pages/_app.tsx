import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Museum</title>

        <link
          rel='preload'
          href='/assets/fonts/minecraft-enchantment.woff2'
          as='font'
          type='font/woff2'
          crossOrigin='true'
        />

        <link
          rel='preload'
          href='/assets/fonts/Minecraftia-Regular.woff2'
          as='font'
          type='font/woff2'
          crossOrigin='true'
        />

        <link
          rel='preload'
          href='/assets/fonts/MinecraftTen.woff2'
          as='font'
          type='font/woff2'
          crossOrigin='true'
        />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
export default App;
