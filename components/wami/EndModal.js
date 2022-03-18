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
} from '@chakra-ui/react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import Countdown from 'react-countdown';
import { BsFillShareFill, BsFillFileEarmarkCheckFill } from 'react-icons/bs';

import { scoreToEmoji } from '../common';

ChartJS.register(CategoryScale, LinearScale, BarElement);
const EndModal = ({
  isOpen,
  onClose,
  victory,
  challengeData,
  numGuess,
  scoreData,
}) => {
  const [isCopied, setIsCopied] = useState(false);

  const { answer, date, hint } = challengeData || '';
  const score = victory ? numGuess + 1 : 9;
  const title = `WAMI ${date} • Guess the Word`;
  const text = `WAMI ${date} • Guess the Word
My score: ${scoreToEmoji(score)}➖8️⃣

#WAMI`;
  const url = 'https://quentinlintz.com/wami';

  const chartData = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
    datasets: [
      {
        label: 'Score',
        data: scoreData,
        backgroundColor: 'pink',
        borderRadius: 12,
      },
    ],
  };

  const chartOptions = {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawTicks: false,
        },
        ticks: {
          color: 'white',
        },
      },
      y: {
        grid: {
          drawBorder: false,
          drawTicks: true,
        },
        ticks: {
          color: 'white',
          stepSize: 1,
        },
      },
    },
  };

  const shareData = {
    title,
    text,
    url,
  };

  let today = new Date();
  const minuteOffset = today.getTimezoneOffset();
  today.setDate(today.getUTCDate() + 1);
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
        <ModalHeader fontSize={['2xl', '3xl']} color='white' textAlign='center'>
          {victory
            ? `The word was ${answer?.toUpperCase()}`
            : `It was ${answer?.toUpperCase()}!`}
        </ModalHeader>
        <ModalBody fontSize={['lg', 'xl']} color='white' textAlign='center'>
          {victory
            ? `Come back later to play again and don't forget to share with your friends!`
            : `You almost had it today, come back later to try again.`}
          <Box h={300} centerContent>
            <Bar data={chartData} options={chartOptions} />
          </Box>
        </ModalBody>
        <ModalFooter color='white'>
          <Box fontSize={['3xl', '4xl']} w='50%'>
            <Countdown key={challengeData.date} date={today} daysInHours />
          </Box>
          <Button
            rightIcon={
              isCopied ? <BsFillFileEarmarkCheckFill /> : <BsFillShareFill />
            }
            size='lg'
            w='50%'
            colorScheme={isCopied ? 'green' : 'whiteAlpha'}
            onClick={handleClick}
          >
            {isCopied ? 'COPIED' : 'SHARE'}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EndModal;
