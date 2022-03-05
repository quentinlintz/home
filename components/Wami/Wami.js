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
  const [numGuess, setNumGuess] = useState(0);
  const [prevGuess, setPrevGuess] = useState('');

  const checkGuess = (guess) => {
    if (numGuess < 4) {
      setNumGuess(numGuess + 1);
      setPrevGuess(guess);
    } else {
      console.log('Game over');
    }
    console.log(numGuess);
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
      <VStack spacing='1em' width='100%'>
        <WordCard word={numGuess >= 0 ? challengeData.hints[0] : '?'} />
        <WordCard word={numGuess >= 1 ? challengeData.hints[1] : '?'} />
        <WordCard word={numGuess >= 2 ? challengeData.hints[2] : '?'} />
        <WordCard word={numGuess >= 3 ? challengeData.hints[3] : '?'} />
        <WordCard word={numGuess >= 4 ? challengeData.hints[4] : '?'} />
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
              <FormControl isInvalid={form.errors.guess && form.touched.guess}>
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
        </Form>
      </Formik>
    </VStack>
  );
};

export default Wami;
