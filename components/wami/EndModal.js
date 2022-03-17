import React, { useState } from 'react';

import {
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  HStack,
} from '@chakra-ui/react';
import Countdown from 'react-countdown';
import { BsFillShareFill, BsFillFileEarmarkCheckFill } from 'react-icons/bs';

import { scoreToEmoji } from '../common';

const EndModal = ({ isOpen, onClose, victory, challengeData, numGuess }) => {
  const [isCopied, setIsCopied] = useState(false);

  const { answer, date, hint } = challengeData || '';
  const score = victory ? numGuess + 1 : 9;
  const title = `WAMI ${date} • Guess the Word`;
  const text = `WAMI ${date} • Guess the Word
My score: ${scoreToEmoji(score)}/8️⃣

#WAMI`;
  const url = 'https://quentinlintz.com/wami';
  const hashtag = '#WAMI';

  const shareData = {
    title,
    text,
    url,
  };

  let today = new Date();
  const minuteOffset = today.getTimezoneOffset();
  today.setDate(today.getDate() + 1);
  today.setHours(0);
  today.setMinutes(minuteOffset * -1);
  today.setSeconds(0);

  const handleClick = async () => {
    if (navigator.share) {
      await navigator.share(shareData);
    } else {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      motionPreset='scale'
      closeOnOverlayClick={false}
      isCentered
    >
      <ModalOverlay />
      <ModalContent bgGradient='linear(to-l, gray.700, gray.800)' p={4} m={4}>
        {victory ? (
          <>
            <ModalHeader fontSize={['2xl', '3xl']} color='white'>
              The word was {answer?.toUpperCase()} 🎉
            </ModalHeader>
            <ModalBody fontSize={['lg', 'xl']} color='white'>
              Come back later to play again!
            </ModalBody>
          </>
        ) : (
          <>
            <ModalHeader fontSize={['2xl', '3xl']} color='white'>
              It was {answer?.toUpperCase()}!
            </ModalHeader>
            <ModalBody fontSize={['lg', 'xl']} color='white'>
              You almost had it today, come back later to try again.
            </ModalBody>
          </>
        )}
        <ModalFooter color='white'>
          <Box fontSize='2xl' w='50%'>
            <Countdown key={challengeData.date} date={today} daysInHours />
          </Box>
          <Button
            rightIcon={
              isCopied ? <BsFillFileEarmarkCheckFill /> : <BsFillShareFill />
            }
            size='lg'
            colorScheme={isCopied ? 'green' : 'whiteAlpha'}
            onClick={handleClick}
          >
            {isCopied ? 'COPIED' : 'SHARE'}
          </Button>
        </ModalFooter>
        <ModalCloseButton color='white' />
      </ModalContent>
    </Modal>
  );
};

export default EndModal;
