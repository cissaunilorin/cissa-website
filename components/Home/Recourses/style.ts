import { BoxProps, HeadingProps, TextProps } from '@chakra-ui/react';

export const resourceContainer: BoxProps = {
  as: 'section',
  mb: '135px',
  pb: '200px',
};

export const resourceText: TextProps = {
  fontWeight: 400,
  fontSize: '18px',
  lineHeight: '25px',
  mb: '40px',
  mt: '16px',
  color: 'grey.text',
};

export const resourceBoxHeading: HeadingProps = {
  fontWeight: 700,
  fontSize: '20px',
  lineHeight: '100%',
  color: 'brown.deep',
};
