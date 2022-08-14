import { BoxProps, HeadingProps, TextProps } from '@chakra-ui/react';

export const aboutContainer: BoxProps = {
  as: 'section',
  mb: '135px',
  pb: '200px',
  bgImage:
    'url(/assets/ab-1.png), url(/assets/ab-2.png), url(/assets/ab-3.png)',
  bgPos: '5% 0, 0 50%, 100% 100%',
  backgroundRepeat: 'no-repeat',
};

export const aboutText: TextProps = {
  fontWeight: 400,
  fontSize: '18px',
  lineHeight: '25px',
  mb: '40px',
  mt: '16px',
  color: 'grey.text',
};

export const aboutSmText: TextProps = {
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '18px',
  color: 'grey.text',
  w: '236px',
  maxW: '100%',
};

export const aboutBoxHeading: HeadingProps = {
  fontWeight: 700,
  fontSize: '20px',
  lineHeight: '100%',
  color: 'brown.deep',
};
