import { BoxProps, HeadingProps, TextProps } from '@chakra-ui/react';

export const featureText: TextProps = {
  fontWeight: 400,
  fontSize: { base: '18px', md: '20px' },
  lineHeight: { base: '20px', md: '26px' },
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
  fontSize: { base: '18px', md: '20px' },
  lineHeight: { base: '22px', md: '24px' },
  textAlign: 'center',
  color: '#121212',
  as: 'h3',
  mb: '8px',
};

export const factsText: TextProps = {
  fontWeight: 400,
  fontSize: { base: '14px', md: '16px' },
  lineHeight: { base: '22px', md: '24px' },
  textAlign: 'center',
  color: '#999999',
  mb: '36px',
};

export const factsInnerBox: BoxProps = {
  bg: 'url(/assets/fact-curve.png),url(/assets/fact-dot.png)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: { base: '100% 100%, 30%', md: '100% 100%, 15%' },
  backgroundPosition: { base: '0 0, 100% 2%', md: '0 0, 100% 0' },
  py: { base: '70px', md: '110px' },
};
