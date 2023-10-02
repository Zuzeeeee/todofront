import React from 'react';
import { Button, Center, Flex, VStack } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Input } from '../../components';

interface SignupData {
  username: string;
}

const Signin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupData>({ reValidateMode: 'onSubmit' });

  const navigate = useNavigate();

  const onSubmit = (data: SignupData) => {
    console.log(data);

    navigate('/Home');
  };

  return (
    <Center justifyContent="center" alignItems="center" h="100vh">
      <Flex
        p="4"
        w="50%"
        as="form"
        display="block"
        backgroundColor="purple.100"
        borderRadius="10"
      >
        <VStack w="100%" spacing="2">
          <Input label="Username" />
          <Button type="submit">Login</Button>
        </VStack>
      </Flex>
    </Center>
  );
};

export default Signin;
