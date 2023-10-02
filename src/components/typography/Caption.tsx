import React, { useMemo } from 'react';
import { Text, TextProps } from '@chakra-ui/react';

interface CaptionProps extends Omit<TextProps, 'fontFamily'> {
  type?: 'semibold' | 'medium' | 'default' | 'small-medium' | 'small-regular';
}

interface TypographyByType {
  [key: string]: {
    fontSize: number | string;
    fontWeight: number;
    lineHeight?: number | string;
  };
}

export const Caption = ({
  type = 'default',
  color = 'modal.white',
  children,
  ...rest
}: CaptionProps) => {
  const typographyByType: TypographyByType = useMemo(
    () => ({
      semibold: {
        fontSize: '12px',
        fontWeight: 600,
        lineHeight: '16px',
      },
      medium: {
        fontSize: '12px',
        fontWeight: 500,
        lineHeight: '16px',
      },
      default: {
        fontSize: '12px',
        fontWeight: 400,
        lineHeight: '16px',
      },
      'small-medium': {
        fontSize: '10px',
        fontWeight: 500,
        lineHeight: '20px',
      },
      'small-regular': {
        fontSize: '10px',
        fontWeight: 400,
        lineHeight: '20px',
      },
    }),
    [],
  );

  return (
    <Text {...typographyByType[type]} color={color} {...rest}>
      {children}
    </Text>
  );
};
