import React from 'react';
import {
  Box,
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
    <Center bg='#171313' p={['20px']} w='100%' display='flex'>
      <VStack
        divider={<StackDivider borderColor='gray.600' />}
        spacing={4}
        align='stretch'
      >
        <Text
          fontSize={['md', 'lg', '2xl', '4xl']}
          textAlign='center'
          bgGradient='linear(to-l, #7928CA, #FF0080)'
          bgClip='text'
        >
          Welcome my homepage.
        </Text>
        <Text
          fontSize={['sm', 'sm', 'md', 'xl']}
          color='white'
          textAlign='center'
        >
          I&apos;m a software engineer with 7 years of experience I currently
          work in fintech. Most of my time spent is working on new tech projects{' '}
          <em>(like this site)</em>, reading, discovering new music, or
          weightlifting. Reach out to me on social media if you wanna chat!
        </Text>
      </VStack>
    </Center>
  </SimpleGrid>
);

export default Welcome;
