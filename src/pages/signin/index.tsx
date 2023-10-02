import React from 'react';
import { Center } from '@chakra-ui/react';
import { LoginInput } from './components/LoginInput';

const Signin = () => {
  return (
    <Center justifyContent="center" alignItems="center" h="100vh">
      <LoginInput />
    </Center>
  );
};

export default Signin;
