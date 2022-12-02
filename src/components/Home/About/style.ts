import { BoxProps, HeadingProps, TextProps } from '@chakra-ui/react';

export const aboutContainer: BoxProps = {
  as: 'section',
  mb: { base: '5px', md: '135px' },
  pt: { base: '10px', md: '50px' },
  pb: { base: '100px', md: '200px' },
  bgImage: `url(/assets/ab-1.png),
     url(/assets/ab-2.png),
     url(/assets/ab-3.png),
     url(/assets/fact-dot.png),
     url(/assets/fact-dot.png)`,
  bgPos: {
    base: '5% 0, 0 50%, 100% 100%, 100% 0, 0 30%',
    lg: '5% 0, 0 50%, 100% 100%, 50% 0, 20% 75%',
  },
  bgSize: {
    base: '5%, 15%, 20%, 20%, 20%',
    lg: 'auto, auto, auto, 10%, 10%',
  },
  backgroundRepeat: 'no-repeat',
};

export const aboutText: TextProps = {
  fontWeight: 400,
  fontSize: { lg: '18px', base: '16px' },
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
  fontSize: { base: '18px', md: '20px' },
  lineHeight: '100%',
  color: 'brown.deep',
};
