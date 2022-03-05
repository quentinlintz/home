import React from 'react';
import { Text, VStack, Input } from '@chakra-ui/react';
import WordCard from '../WordCard/WordCard';

const Wami = () => (
  <VStack p={8} spacing='2em'>
    <Text
      fontweight='bold'
      textAlign='center'
      fontSize={['4xl', '6xl']}
      fontWeight='700'
      bgGradient='linear(to-l, blue.300, red.400)'
      bgClip='text'
    >
      What Am I?
    </Text>
    <VStack spacing='1em' width='100%'>
      <WordCard word='?' />
      <WordCard word='?' />
      <WordCard word='?' />
      <WordCard word='?' />
      <WordCard word='?' />
    </VStack>
    <Input
      fontSize={['1.5em', '2em']}
      variant='flushed'
      color='white'
      focusColor='#81E6D9'
      errorBorderColor='#FEB2B2'
      placeholder='Take a guess'
    />
  </VStack>
);

export default Wami;
