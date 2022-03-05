import React from 'react';
import { Box, Center } from '@chakra-ui/react';

const WordCard = ({ word }) => {
  return (
    <Box
      p={4}
      pl={4}
      w='100%'
      color='whiteAlpha.800'
      bgGradient='linear(to-l, gray.700, gray.800)'
      fontWeight='semibold'
      fontSize={['xl', '2xl']}
      textTransform='uppercase'
      borderRadius='lg'
    >
      <Center>{word}</Center>
    </Box>
  );
};

export default WordCard;
