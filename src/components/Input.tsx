import {
  Text,
  VStack,
  Input as InputChakra,
  InputProps as InputChakraProps,
  StackProps as StackChakraProps,
  HStack,
  Icon,
} from '@chakra-ui/react';
import React, { HTMLInputTypeAttribute } from 'react';
import { AlertCircle } from 'react-feather';
import { Caption } from './typography';

interface InputProps extends InputChakraProps {
  label: string;
  type?: HTMLInputTypeAttribute;
  containerProps?: StackChakraProps;
  error?: any;
}

export const Input = ({
  label,
  type = 'text',
  containerProps,
  error,
  ...rest
}: InputProps) => {
  return (
    <VStack alignItems="start" w="100%" {...containerProps}>
      <Text>{label}</Text>
      <InputChakra type={type} backgroundColor="white" {...rest} />
      {error && (
        <HStack direction="row" alignContent="center">
          <Icon w="4" h="4" color="status.red.error" as={AlertCircle} />
          <Caption color="status.red.error">{error?.message}</Caption>
        </HStack>
      )}
    </VStack>
  );
};
