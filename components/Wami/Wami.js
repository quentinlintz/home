import React from 'react';
import {
  Box,
  Center,
  Image,
  SimpleGrid,
  StackDivider,
  Text,
  VStack,
  Input,
  Icon,
} from '@chakra-ui/react';

const Wami = () => (
  <VStack p={8}>
    <Text
      textAlign='center'
      fontSize={['4xl', '6xl']}
      fontWeight='700'
      bgGradient='linear(to-l, #38B2AC, #3182CE)'
      bgClip='text'
    >
      What Am I?
    </Text>
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
