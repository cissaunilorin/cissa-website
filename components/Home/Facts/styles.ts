import { BoxProps, HeadingProps, TextProps } from '@chakra-ui/react';

export const featureText: TextProps = {
  fontWeight: 400,
  fontSize: '20px',
  lineHeight: '26px',
  textAlign: 'center',
  color: 'grey.text',
};

export const factsBox: BoxProps = {
  flex: '0 0 253px',
  background: 'white',
  boxShadow: '0px 7.67208px 46.0325px rgba(38, 45, 118, 0.08)',
  borderRadius: '15px',
  p: '24px 20px',
};

export const factsHeading: HeadingProps = {
  fontWeight: 600,
  fontSize: '20px',
  lineHeight: '24px',
  textAlign: 'center',
  color: '#121212',
  as: 'h3',
  mb: '8px',
};

export const factsText: TextProps = {
  fontWeight: 400,
  fontSize: '16px',
  lineHeight: '24px',
  textAlign: 'center',
  color: '#999999',
  mb: '36px',
};
