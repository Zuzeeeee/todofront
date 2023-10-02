import React, { useMemo } from 'react';
import { Text, TextProps } from '@chakra-ui/react';

export type BodyTypes =
  | 'semibold'
  | 'medium'
  | 'default'
  | 'regular'
  | 'small-bold'
  | 'small-semibold'
  | 'small-medium'
  | 'small';

interface BodyProps extends Omit<TextProps, 'fontFamily'> {
  type?: BodyTypes;
}

interface TypographyByType {
  [key: string]: {
    fontSize: number | string;
    fontWeight: number;
    lineHeight?: number | string;
  };
}

export const Body = ({
  type = 'default',
  color = 'branding.blue.04',
  children,
  ...rest
}: BodyProps) => {
  const typographyByType: TypographyByType = useMemo(
    () => ({
      semibold: {
        fontSize: '16px',
        fontWeight: 600,
        lineHeight: '20px',
      },
      medium: {
        fontSize: '16px',
        fontWeight: 500,
        lineHeight: '20px',
      },
      regular: {
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: '20px',
      },
      default: {
        fontSize: '16px',
        fontWeight: 500,
        lineHeight: '20px',
      },
      'small-bold': {
        fontSize: '14px',
        fontWeight: 700,
        lineHeight: '20px',
      },
      'small-semibold': {
        fontSize: '14px',
        fontWeight: 600,
        lineHeight: '20px',
      },
      'small-medium': {
        fontSize: '14px',
        fontWeight: 500,
        lineHeight: '20px',
      },
      small: {
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: '20px',
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
