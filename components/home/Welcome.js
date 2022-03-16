import React from 'react';

import {
  Center,
  Image,
  SimpleGrid,
  StackDivider,
  Text,
  VStack,
} from '@chakra-ui/react';

const Welcome = () => (
  <SimpleGrid columns={[1, null, 2]}>
    <Image
      src={process.env.NEXT_PUBLIC_QUENTIN_PICTURE_URL}
      alt='Quentin Lintz'
      display='flex'
      w='100%'
    />
    <Center bg='#171313' w='100%' display='flex'>
      <VStack
        pt={['2rem', '2rem', '1rem', '1rem']}
        pb={['2rem', '2rem', '1rem', '1rem']}
        pl={['1rem', '2rem', '2rem', '3rem']}
        pr={['1rem', '2rem', '2rem', '3rem']}
        divider={<StackDivider borderColor='gray.600' />}
        spacing={4}
        align='stretch'
      >
        <Text
          fontSize={['3xl', '3xl', '2xl', '3xl', '4xl']}
          textAlign='center'
          bgGradient='linear(to-l, #7928CA, #FF0080)'
          bgClip='text'
          fontWeight={700}
        >
          👋 Welcome to my site!
        </Text>
        <Text
          fontSize={['2xl', 'lg', 'lg', 'xl', '2xl']}
          color='white'
          textAlign='right'
        >
          I&apos;m a software engineer currently working in fintech. Most of my
          time is spent working on new tech projects <em>(like this site)</em>,
          reading, discovering new music, and weightlifting. Reach out to me on
          social media if you wanna chat!
        </Text>
      </VStack>
    </Center>
  </SimpleGrid>
);

export default Welcome;
