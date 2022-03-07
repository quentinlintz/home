import React from 'react';
import { motion } from 'framer-motion';
import { Box, Center } from '@chakra-ui/react';

const WordCard = ({ word, updated }) => {
  return (
    <Box width='100%'>
      <motion.div
        animate={updated ? { scale: [1, 1.25, 1] } : { scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Box
          p={[2, 4]}
          pl={[2, 4]}
          color='whiteAlpha.800'
          bgGradient='linear(to-l, gray.700, gray.800)'
          fontWeight='semibold'
          fontSize={['sm', '2xl']}
          textTransform='uppercase'
          borderRadius='lg'
        >
          <Center>{word}</Center>
        </Box>
      </motion.div>
    </Box>
  );
};

export default WordCard;
