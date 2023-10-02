import React, { useMemo } from 'react';
import { Text, TextProps } from '@chakra-ui/react';

interface HeadingProps extends Omit<TextProps, 'fontFamily'> {
  type?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h4-semibold'
    | 'h5'
    | 'h5-semibold'
    | 'h6'
    | 'small-semibold';
}

interface TypographyByType {
  [key: string]: {
    fontSize: number | string;
    fontWeight: number;
  };
}

export const Heading = ({
  type = 'h1',
  color = 'modal.white',
  children,
  ...rest
}: HeadingProps) => {
  const typographyByType: TypographyByType = useMemo(
    () => ({
      h1: {
        fontSize: '56px',
        fontWeight: 700,
      },
      h2: {
        fontSize: '48px',
        fontWeight: 700,
      },
      h3: {
        fontSize: '40px',
        fontWeight: 700,
      },
      h4: {
        fontSize: '32px',
        fontWeight: 500,
      },
      'h4-semibold': {
        fontSize: '32px',
        fontWeight: 600,
      },
      h5: {
        fontSize: '24px',
        fontWeight: 500,
      },
      'h5-semibold': {
        fontSize: '24px',
        fontWeight: 600,
      },
      h6: {
        fontSize: '20px',
        fontWeight: 500,
      },
      'small-semibold': {
        fontSize: '14px',
        fontWeight: 600,
      },
    }),
    [],
  );

  return (
    <Text {...typographyByType[type]} {...rest} color={color}>
      {children}
    </Text>
  );
};
