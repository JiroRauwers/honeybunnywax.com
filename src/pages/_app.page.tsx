import { AppProps } from 'next/app';
import { Roboto } from 'next/font/google';
import Head from 'next/head';

import { ThemeProvider } from 'styled-components';

import GlobalStyles from 'styles/global';
import { base, light } from 'styles/theme';

// If loading a variable font, you don't need to specify the font weight
const primary = Roboto({
  subsets  : ['latin'],
  weight   : ['100', '300', '400', '700', '900'],
  variable : '--font-primary'
});

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={{ ...base, ...light }}>
      <Head>
        <title>Project</title>
        {/* <link rel="shorcut icon" href="/assets/logoIco.svg" /> */}
        {/* <link rel="apple-touch-icon" href="/assets/logoIco.svg" /> */}
        <link rel="favicon" href="/img/logoIco.svg" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="Project" />

        <title>Honney Bunny Wax</title>
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <div
        id="NextFontWrapper"
        className={`${primary.variable}`}
        style={primary.style}
      >
        <Component {...pageProps} />
      </div>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
