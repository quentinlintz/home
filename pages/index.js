import { SEO } from '../components/common';
import { Header, Welcome } from '../components/home';
import { Container } from '@chakra-ui/react';
import React from 'react';

export default function Home() {
  return (
    <React.Fragment>
      <SEO />
      <Container p={0} maxW='1600px' centerContent>
        <Header />
        <Welcome />
      </Container>
    </React.Fragment>
  );
}
