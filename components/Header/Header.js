import React from 'react';
import HeaderIcon from '../HeaderIcon/HeaderIcon';
import { Flex, Spacer } from '@chakra-ui/react';
import { FaTwitterSquare, FaGithubSquare, FaLinkedin } from 'react-icons/fa';

const Header = () => (
  <Flex p={['4', '8']} w='100%' bgGradient='linear(to-t, #171313, black)'>
    <Spacer />
    <HeaderIcon link='https://github.com/quentinlintz' icon={FaGithubSquare} />
    <Spacer />
    <HeaderIcon
      link='https://twitter.com/quentinlintz'
      icon={FaTwitterSquare}
    />
    <Spacer />
    <HeaderIcon link='https://linkedin.com/in/quentinlintz' icon={FaLinkedin} />
    <Spacer />
  </Flex>
);

export default Header;
