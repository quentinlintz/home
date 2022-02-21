import React from 'react';
import {
  Box,
  Center,
  Image,
  SimpleGrid,
  StackDivider,
  Text,
  VStack,
  Icon,
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
        pt={'1rem'}
        pb={'1rem'}
        pl={['1rem', '2rem', '2rem', '3rem']}
        pr={['1rem', '2rem', '2rem', '3rem']}
        divider={<StackDivider borderColor='gray.600' />}
        spacing={4}
        align='stretch'
      >
        <Text
          fontSize={['xl', 'lg', '2xl', '3xl']}
          textAlign='center'
          bgGradient='linear(to-l, #7928CA, #FF0080)'
          bgClip='text'
          fontWeight={700}
        >
          👋 Welcome my homepage!
        </Text>
        <Text
          fontSize={['xs', 'sm', 'md', 'xl']}
          color='white'
          textAlign='center'
        >
          I&apos;m a software engineer with 7 years of experience and currently
          work in fintech. Most of my time is spent working on new tech projects{' '}
          <em>(like this site)</em>, reading, discovering new music, and
          weightlifting. Reach out to me on social media if you wanna chat!
        </Text>
      </VStack>
    </Center>
  </SimpleGrid>
);

export default Welcome;
