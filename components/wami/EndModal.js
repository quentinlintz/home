import React from 'react';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';

const EndModal = ({ isOpen, onClose, victory, answer }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} motionPreset='scale'>
      <ModalOverlay />
      <ModalContent bgGradient='linear(to-l, gray.700, gray.800)' p={4} m={4}>
        {victory ? (
          <>
            <ModalHeader color='white'>
              The word was {answer?.toUpperCase()} 🎉
            </ModalHeader>
            <ModalBody color='white'>
              Come back tomorrow to play again!
            </ModalBody>
          </>
        ) : (
          <>
            <ModalHeader color='white'>
              It was {answer?.toUpperCase()}!
            </ModalHeader>
            <ModalBody color='white'>
              You almost had it today, come back tomorrow to try again.
            </ModalBody>
          </>
        )}
        <ModalCloseButton color='white' />
      </ModalContent>
    </Modal>
  );
};

export default EndModal;