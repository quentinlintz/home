import Head from 'next/head';
import Header from '../components/Header/Header';
import Welcome from '../components/Welcome/Welcome';
import { Container } from '@chakra-ui/react';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home • Quentin Lintz</title>
      </Head>
      <Container maxW='1400px' centerContent>
        <Header />
        <Welcome />
      </Container>
    </div>
  );
}
