import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Button, Input, VStack, Text, Flex } from '@chakra-ui/react';

interface LoginData {
  login: string;
  password: string;
}

export const LoginInput = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({ reValidateMode: 'onSubmit' });

  const navigate = useNavigate();

  const onSubmit = (data: LoginData) => {
    console.log(data);

    navigate('/Home');
  };

  return (
    <Flex
      p="4"
      w="50%"
      as="form"
      display="block"
      backgroundColor="purple.100"
      borderRadius="10"
      onSubmit={handleSubmit(onSubmit)}
    >
      <VStack w="100%" spacing="2">
        <VStack alignItems="start" w="100%">
          <Text>User</Text>
          <Input type="text" {...register('login')} backgroundColor="white" />
        </VStack>
        <VStack alignItems="start" spacing={1} w="100%">
          <Text>Senha</Text>
          <Input
            type="password"
            {...register('password')}
            backgroundColor="white"
          />
        </VStack>
        <Button type="submit">Login</Button>
      </VStack>
    </Flex>
  );
};
