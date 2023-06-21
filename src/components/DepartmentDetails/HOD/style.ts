import { BoxProps, TextProps } from '@chakra-ui/react';

export const hodAboutBox: BoxProps = {
  flexDirection: { base: 'column', md: 'column', lg: 'row' },
  alignItems: { base: 'center', md: 'center', lg: 'none' },
  justifyContent: { base: 'center', md: 'center', lg: 'none' },
  textAlign: { base: 'center', md: 'center', lg: 'left' },
};
export const hodImg: BoxProps = {
  w: { base: '150px', md: '150px', lg: '950px' },
};
export const hodHeading: TextProps = {
  fontSize: { base: '28px', md: '30px', lg: '40px' },
  color: 'brown.deep',
};
export const hodName: TextProps = {
  fontSize: '20px',
  fontWeight: 600,
  color: 'brown.light',
};
export const aboutHodText: TextProps = {
  fontSize: { base: '16px', md: '18px', lg: '18px' },
};
