import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Museum</title>
        <link
          rel='stylesheet'
          type='text/css'
          charSet='UTF-8'
          href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
        />
        <link
          rel='stylesheet'
          type='text/css'
          href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
        />
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

        <link rel='preload' as='image' href='/assets/background/book.webp' />
        <link rel='preload' as='image' href='/assets/background/1page.webp' />
        <link rel='preload' as='image' href='/assets/logos/mineversal.png' />
        <link rel='preload' as='image' href='/assets/logos/mcindo.png' />
        <link rel='preload' as='image' href='/assets/logos/unibuild.png' />
        <link
          rel='preload'
          as='image'
          href='https://media.discordapp.net/attachments/445232632679235595/889818744422027264/unknown.png?width=425&height=559'
        />
        <link
          rel='preload'
          as='image'
          href='https://media.discordapp.net/attachments/445232632679235595/889901118811938816/unknown.png?width=771&height=238'
        />
        <link
          rel='preload'
          as='image'
          href='https://media.discordapp.net/attachments/445232632679235595/889901867918839818/unknown.png?width=238&height=238'
        />
        <link
          rel='preload'
          as='image'
          href='https://media.discordapp.net/attachments/854941249831043082/889836738393026560/unknown.png?width=1080&height=276'
        />
        <link
          rel='preload'
          as='image'
          href='https://media.discordapp.net/attachments/445232632679235595/889896106853564466/unknown.png?width=900&height=207'
        />
        <link
          rel='preload'
          as='image'
          href='https://media.discordapp.net/attachments/445232632679235595/889896522756522064/unknown.png?width=913&height=220'
        />
        <link
          rel='preload'
          as='image'
          href='https://media.discordapp.net/attachments/445232632679235595/889897481276645426/unknown.png?width=1010&height=232'
        />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
export default App;
