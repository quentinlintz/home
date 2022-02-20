import React from 'react';
import { Image } from '@chakra-ui/react';

const Welcome = () => (
  <Image
    src={process.env.NEXT_PUBLIC_QUENTIN_PICTURE_URL}
    alt='Quentin Lintz'
    display='flex'
    w='100%'
  />
);

export default Welcome;
