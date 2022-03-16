import React from 'react';

import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  HStack,
} from '@chakra-ui/react';
import moment from 'moment';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from 'next-share';
import Countdown from 'react-countdown';

import { scoreToEmoji } from '../common';

const EndModal = ({ isOpen, onClose, victory, challengeData, numGuess }) => {
  const { answer, date, hint } = challengeData || '';
  const score = victory ? numGuess + 1 : 9;
  const url = 'https://quentinlintz.com/wami';
  const quote = `WAMI ${date} • Guess the Word • My score: ${score}/8`;
  const title = `WAMI ${date} • Guess the Word
My score: ${scoreToEmoji(score)}/8️⃣

#WAMI`;
  const hashtag = '#WAMI';

  let today = new Date();
  const minuteOffset = today.getTimezoneOffset();
  today.setDate(today.getDate() + 1);
  today.setHours(0);
  today.setMinutes(minuteOffset * -1);
  today.setSeconds(0);

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
              Come back in tomorrow to play again!
            </ModalBody>
          </>
        ) : (
          <>
            <ModalHeader fontSize={['2xl', '3xl']} color='white'>
              It was {answer?.toUpperCase()}!
            </ModalHeader>
            <ModalBody fontSize={['lg', 'xl']} color='white'>
              You almost had it today, come back tomorrow hours to try again.
            </ModalBody>
          </>
        )}
        <ModalFooter color='white'>
          <HStack w='100%'>
            <Box fontSize='2xl' w='50%'>
              <Countdown date={today} daysInHours />
            </Box>
            <HStack w='50%' spacing={['4', '6']}>
              <FacebookShareButton url={url} quote={quote} hashtag={hashtag}>
                <FacebookIcon size={[32, 48]} round />
              </FacebookShareButton>
              <TwitterShareButton url={url} title={title}>
                <TwitterIcon size={[32, 48]} round />
              </TwitterShareButton>
              <LinkedinShareButton url={url} summary={title} source={url}>
                <LinkedinIcon size={[32, 48]} round />
              </LinkedinShareButton>
            </HStack>
          </HStack>
        </ModalFooter>
        <ModalCloseButton color='white' />
      </ModalContent>
    </Modal>
  );
};

export default EndModal;
