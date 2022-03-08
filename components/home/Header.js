import React from 'react';

import { HStack, Spacer, Text, Box, Center } from '@chakra-ui/react';
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from 'react-icons/ai';

import { HeaderIcon } from './';

const Header = () => (
  <HStack p={['4', '8']} w='100%' bgColor='#171313'>
    <Box w='50%' display='flex'>
      <Text
        textAlign='center'
        color='white'
        fontSize={['3xl']}
        fontWeight='700'
        bgGradient='linear(to-l, #7928CA, #FF0080)'
        bgClip='text'
      >
        Home
      </Text>
    </Box>
    <Center w='50%' display='flex'>
      <Spacer />
      <HeaderIcon link='https://github.com/quentinlintz' icon={AiFillGithub} />
      <Spacer />
      <HeaderIcon
        link='https://twitter.com/quentinlintz'
        icon={AiFillTwitterCircle}
      />
      <Spacer />
      <HeaderIcon
        link='https://linkedin.com/in/quentinlintz'
        icon={AiFillLinkedin}
      />
      <Spacer />
    </Center>
  </HStack>
);

export default Header;
