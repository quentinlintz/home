import React, { useState } from 'react';
import * as yup from 'yup';
import { Formik, Form, Field } from 'formik';
import {
  Text,
  VStack,
  Input,
  FormControl,
  FormHelperText,
  FormErrorMessage,
} from '@chakra-ui/react';
import WordCard from '../WordCard/WordCard';

const challengeData = {
  answer: 'ocean',
  hints: ['open', 'great', 'vast', 'deep', 'atlantic'],
};

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
  const [gameOver, setGameOver] = useState(false);
  const [victory, setVictory] = useState(false);
  const [numGuess, setNumGuess] = useState(0);
  const [prevGuess, setPrevGuess] = useState('');

  const checkGuess = (guess) => {
    // If the word was correctly guessed
    if (challengeData.answer === guess.toLowerCase()) {
      setVictory(true);
      return;
    }

    if (numGuess === 4) {
      setGameOver(true);
      return;
    }

    setNumGuess(numGuess + 1);
    setPrevGuess(guess);
  };

  return (
    <VStack pt={8} spacing='2em'>
      <Text
        textAlign='center'
        fontSize={['4xl', '6xl']}
        fontWeight='700'
        bgGradient='linear(to-l, blue.300, red.400)'
        bgClip='text'
      >
        What Am I?
      </Text>
      {gameOver || victory ? null : (
        <VStack spacing='1em' width='100%'>
          <WordCard word={numGuess >= 0 ? challengeData.hints[0] : '?'} />
          <WordCard word={numGuess >= 1 ? challengeData.hints[1] : '?'} />
          <WordCard word={numGuess >= 2 ? challengeData.hints[2] : '?'} />
          <WordCard word={numGuess >= 3 ? challengeData.hints[3] : '?'} />
          <WordCard word={numGuess >= 4 ? challengeData.hints[4] : '?'} />
        </VStack>
      )}
      {gameOver ? (
        <Text color='white' fontSize='xl' textAlign='center'>
          Almost! The answer was {challengeData.answer}!
        </Text>
      ) : null}
      {victory ? (
        <Text color='white' fontSize='xl' textAlign='center'>
          You did it! The answer was {challengeData.answer}!
        </Text>
      ) : null}
      <Formik
        initialValues={{ guess: '' }}
        validationSchema={GuessSchema}
        onSubmit={(values, { resetForm }) => {
          checkGuess(values.guess);
          resetForm({ guess: '' });
        }}
      >
        <Form>
          {gameOver || victory ? null : (
            <Field name='guess'>
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.guess && form.touched.guess}
                  isDisabled={gameOver || victory}
                >
                  <Input
                    {...field}
                    pt={8}
                    pb={8}
                    fontSize={['1.5em', '2em']}
                    focusBorderColor='blue.300'
                    color='white'
                    placeholder='Take a guess'
                  />
                  {form.errors.guess && form.touched.guess ? (
                    <FormErrorMessage>{form.errors.guess}</FormErrorMessage>
                  ) : null}
                  {prevGuess !== '' ? (
                    <FormHelperText>I am not a {prevGuess}...</FormHelperText>
                  ) : (
                    <FormHelperText>
                      Guesses are case-insensitive, hit enter to submit.
                    </FormHelperText>
                  )}
                </FormControl>
              )}
            </Field>
          )}
        </Form>
      </Formik>
    </VStack>
  );
};

export default Wami;
