import React, { useState, useEffect } from 'react';

import { useDisclosure } from '@chakra-ui/react';
import {
  Text,
  Center,
  VStack,
  HStack,
  Input,
  FormControl,
  IconButton,
  FormHelperText,
  FormErrorMessage,
  Spinner,
} from '@chakra-ui/react';
import axios from 'axios';
import { Formik, Form, Field } from 'formik';
import { motion } from 'framer-motion';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import * as yup from 'yup';

import { EndModal, WordCard } from '.';

const TOTAL_HINTS = 8;

const GuessSchema = yup.object({
  guess: yup
    .string()
    .max(20, 'Guess is too long.')
    .matches(
      /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
      'Guess can only contain letters.'
    )
    .required('A guess is required.'),
});

const Wami = () => {
  React.useLayoutEffect = React.useEffect;
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [challengeData, setChallengeData] = useState({});
  const [gameOver, setGameOver] = useState(false);
  const [victory, setVictory] = useState(false);
  const [numGuess, setNumGuess] = useState(0);
  const [prevGuess, setPrevGuess] = useState('');

  const getNewChallenge = () => {
    axios
      .get(`${process.env.NEXT_PUBLIC_WAMI_BACKEND_API}/challenge`, {
        headers: {
          'x-api-key': process.env.NEXT_PUBLIC_WAMI_BACKEND_API_KEY,
        },
      })
      .then((challenge) => setChallengeData(challenge.data))
      .catch((error) => console.log(error));
  };

  const checkGuess = (guess) => {
    // If the word was correctly guessed
    if (challengeData?.answer.toLowerCase() === guess.toLowerCase()) {
      setVictory(true);
      setPrevGuess('');
      onOpen();
      return;
    }

    // If all hints have been shown
    if (numGuess === TOTAL_HINTS - 1) {
      setGameOver(true);
      setPrevGuess('');
      onOpen();
      return;
    }

    setNumGuess(numGuess + 1);
    setPrevGuess(guess);
  };

  useEffect(() => getNewChallenge(), []);

  return (
    <VStack pt={8} pb={8} spacing={['1em', '1.5em']}>
      <Text
        textAlign='center'
        fontSize={['5xl', '6xl']}
        fontWeight='700'
        bgGradient='linear(to-l, blue.300, red.400)'
        bgClip='text'
      >
        What Am I?
      </Text>
      <VStack spacing={['0.5em', '1em']} width='100%'>
        <Text
          textAlign='center'
          fontSize={['sm', 'md']}
          fontWeight='500'
          letterSpacing='0.25em'
          color='whiteAlpha.700'
        >
          HINTS ({numGuess + 1} / 8)
        </Text>
        {challengeData === {} ? (
          <Spinner color='white' />
        ) : (
          challengeData?.hints?.map((hint, index) => {
            if (index <= numGuess) {
              return (
                <WordCard
                  key={index}
                  word={numGuess >= index ? hint : '?'}
                  updated={numGuess >= index ? true : false}
                />
              );
            }
          })
        )}
      </VStack>
      <Formik
        initialValues={{ guess: '' }}
        validationSchema={GuessSchema}
        onSubmit={(values, { resetForm }) => {
          checkGuess(values.guess);
          resetForm({ guess: '' });
        }}
      >
        <Form>
          <Field name='guess'>
            {({ field, form }) => (
              <FormControl
                isInvalid={form.errors.guess && form.touched.guess}
                isDisabled={gameOver || victory}
              >
                <Center>
                  <HStack spacing={2}>
                    <Input
                      {...field}
                      pt={[4, 8]}
                      pb={[4, 8]}
                      fontSize={['1.4em', '2em']}
                      focusBorderColor='blue.300'
                      color='white'
                      placeholder='Take a guess'
                      disabled={victory || gameOver || challengeData === {}}
                      autoComplete='off'
                    />
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Center>
                        <IconButton
                          type='submit'
                          variant='link'
                          fontSize={['3xl', '5xl']}
                          pl={(0, 2)}
                          aria-label='Submit guess'
                          color='white'
                          icon={<BsFillArrowRightCircleFill />}
                          disabled={victory || gameOver || challengeData === {}}
                        />
                      </Center>
                    </motion.button>
                  </HStack>
                </Center>
                {form.errors.guess && form.touched.guess ? (
                  <FormErrorMessage fontSize={['1em', '1.5em']}>
                    {form.errors.guess}
                  </FormErrorMessage>
                ) : null}
                {prevGuess !== '' ? (
                  <FormHelperText fontSize={['1em', '1.5em']}>
                    I am not a {prevGuess}...
                  </FormHelperText>
                ) : (
                  <FormHelperText fontSize={['1em', '1.5em']}>
                    Guess what is being described.
                  </FormHelperText>
                )}
              </FormControl>
            )}
          </Field>
        </Form>
      </Formik>
      <EndModal
        isOpen={isOpen}
        onClose={onClose}
        victory={victory}
        challengeData={challengeData}
        numGuess={numGuess}
      />
    </VStack>
  );
};

export default Wami;
