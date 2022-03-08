import React from 'react';

import { Container } from '@chakra-ui/react';

import { SEO } from '../components/common';
import { Wami } from '../components/wami';

export default function Home() {
  return (
    <React.Fragment>
      <SEO
        title='WAMI'
        description='WAMI (What Am I?) is an addictive word game. Try to guess the noun given five adjectives as hints. How many tries will it take you?'
        image={process.env.NEXT_PUBLIC_WAMI_PICTURE_URL}
        slug='wami'
      />
      <Container p={0} maxW='1600px' centerContent>
        <Wami />
      </Container>
    </React.Fragment>
  );
}
