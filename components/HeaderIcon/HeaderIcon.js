import React from 'react';
import { IconButton } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const HeaderIcon = ({ link, icon }) => (
  <motion.div
    initial='hidden'
    animate='visible'
    variants={item}
    transition={{ duration: 2 }}
    style={{ cursor: 'pointer' }}
  >
    <Link href={link} passHref>
      <IconButton
        as={icon}
        boxSize={[8, 10, 12]}
        color='black'
        _hover={{ bg: 'purple.200', transform: 'scale(0.95)' }}
      />
    </Link>
  </motion.div>
);

export default HeaderIcon;
