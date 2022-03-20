import 'focus-visible/dist/focus-visible';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import CookieConsent from 'react-cookie-consent';

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: '#171313',
      },
    }),
  },
  fonts: {
    heading: 'Josefin Sans, sans-serif',
    body: 'Josefin Sans, sans-serif',
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
      <CookieConsent
        location='bottom'
        buttonText='I understand'
        cookieName='gaConsent'
        style={{ background: '#424242' }}
        buttonStyle={{
          background: '#212121',
          color: 'white',
          fontSize: '1em',
          borderRadius: '0.5em',
        }}
        expires={150}
      >
        This website collects anonymous page view data and WAMI scores only for
        statistical purposes.
      </CookieConsent>
    </ChakraProvider>
  );
}

export default MyApp;
