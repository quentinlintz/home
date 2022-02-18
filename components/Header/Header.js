import React from 'react';
import HeaderIcon from '../HeaderIcon/HeaderIcon';
import { Flex, Spacer } from '@chakra-ui/react';
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from 'react-icons/ai';

const Header = () => (
  <Flex p={['4', '8']} w='100%' bgGradient='linear(to-t, #171313, black)'>
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
  </Flex>
);

export default Header;
