import SEO from '../components/SEO/SEO';
import Header from '../components/Header/Header';
import Welcome from '../components/Welcome/Welcome';
import { Container } from '@chakra-ui/react';
import React from 'react';

export default function Home() {
  return (
    <React.Fragment>
      <SEO />
      <Container maxW='1400px' centerContent>
        <Header />
        <Welcome />
      </Container>
    </React.Fragment>
  );
}
