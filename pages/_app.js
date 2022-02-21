import { ChakraProvider, extendTheme } from '@chakra-ui/react';

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
    </ChakraProvider>
  );
}

export default MyApp;
