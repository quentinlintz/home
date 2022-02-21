import { extendTheme } from '@chakra-ui/react';

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

export default theme;
