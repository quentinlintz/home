import Head from 'next/head';
import Header from '../components/Header/Header';
import Welcome from '../components/Welcome/Welcome';
import { Box } from '@chakra-ui/react';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home • Quentin Lintz</title>
      </Head>
      <Box>
        <Header />
        <Welcome />
      </Box>
    </div>
  );
}
