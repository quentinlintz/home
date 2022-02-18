import Link from 'next/link';
import React from 'react';
import { Icon, Flex, Spacer } from '@chakra-ui/react';
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from 'react-icons/ai';

const Header = () => (
  <Flex p={['4', '8']} w='100%' bgGradient='linear(to-t, #171313, black)'>
    <Spacer />
    <Link href='https://github.com/quentinlintz' passHref>
      <Icon
        as={AiFillGithub}
        boxSize={{ base: '24px', md: '40px', lg: '56px' }}
        color='white'
      />
    </Link>
    <Spacer />
    <Link href='https://twitter.com/quentinlintz' passHref>
      <Icon
        as={AiFillTwitterCircle}
        boxSize={{ base: '24px', md: '40px', lg: '56px' }}
        color='white'
      />
    </Link>
    <Spacer />
    <Link href='https://linkedin.com/in/quentinlintz/' passHref>
      <Icon
        as={AiFillLinkedin}
        boxSize={{ base: '24px', md: '40px', lg: '56px' }}
        color='white'
      />
    </Link>
    <Spacer />
  </Flex>
);

export default Header;
