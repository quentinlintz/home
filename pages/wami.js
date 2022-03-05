import SEO from '../components/SEO/SEO';
import { Container, Text } from '@chakra-ui/react';
import React from 'react';

export default function Home() {
  return (
    <React.Fragment>
      <SEO
        title='Wami'
        description='Wami (What Am I?) is an addictive word game. Try to guess the noun given six adjectives as hints. How many tries will it take you?'
        slug='wami'
      />
      <Container maxW='1400px' centerContent>
        <Text color={'white'}>What Am I?</Text>
      </Container>
    </React.Fragment>
  );
}
