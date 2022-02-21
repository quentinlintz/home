import React from 'react';
import Link from 'next/link';
import { Icon } from '@chakra-ui/react';
import { motion } from 'framer-motion';

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
      <Icon as={icon} boxSize={[8, 10, 12]} color='white' />
    </Link>
  </motion.div>
);

export default HeaderIcon;
