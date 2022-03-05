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
    .required('A guess is required.'),
});

const Wami = () => {
  const checkGuess = (guess) => {
    console.log(guess);
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
        <WordCard word='?' />
        <WordCard word='?' />
        <WordCard word='?' />
        <WordCard word='?' />
        <WordCard word='?' />
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
