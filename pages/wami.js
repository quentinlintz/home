import React from 'react';
import { Container } from '@chakra-ui/react';
import SEO from '../components/SEO/SEO';
import Wami from '../components/Wami';

export default function Home() {
  return (
    <React.Fragment>
      <SEO
        title='WAMI'
        description='WAMI (What Am I?) is an addictive word game. Try to guess the noun given five adjectives as hints. How many tries will it take you?'
        image={process.env.NEXT_PUBLIC_WAMI_PICTURE_URL}
        slug='wami'
      />
      <Container maxW='1400px' centerContent>
        <Wami />
      </Container>
    </React.Fragment>
  );
}
