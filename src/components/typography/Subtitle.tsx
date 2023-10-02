import React, { useMemo } from 'react';
import { Text, TextProps } from '@chakra-ui/react';

interface SubtitleProps extends Omit<TextProps, 'fontFamily'> {
  type?: 'bold' | 'semibold' | 'medium' | 'default';
}

interface TypographyByType {
  [key: string]: {
    fontSize: number | string;
    fontWeight: number;
    lineHeight?: number | string;
  };
}

export const Subtitle = ({
  type = 'default',
  color = 'modal.white',
  children,
  ...rest
}: SubtitleProps) => {
  const typographyByType: TypographyByType = useMemo(
    () => ({
      bold: {
        fontSize: '18px',
        fontWeight: 700,
        lineHeight: '22px',
      },
      semibold: {
        fontSize: '18px',
        fontWeight: 600,
      },
      medium: {
        fontSize: '18px',
        fontWeight: 500,
      },
      default: {
        fontSize: '16px',
        fontWeight: 500,
      },
    }),
    [],
  );

  return (
    <Text {...rest} {...typographyByType[type]} color={color}>
      {children}
    </Text>
  );
};
