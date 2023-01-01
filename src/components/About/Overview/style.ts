import { BoxProps, HeadingProps, TextProps } from '@chakra-ui/react';

export const aboutLgHeading: TextProps = {
  as: 'h1',
  fontSize: '56px',
  fontWeight: 700,
  textAlign: 'center',
  color: 'brown.trans',
};

export const aboutHistoryText: TextProps = {
  fontSize: '18px',
  lineHeight: '25.2px',
  mb: '40px',
  maxW: { base: ' 100%', md: '100%', lg: ' 434px' },
};
export const aboutHistoryPlayCircle: BoxProps = {
  pos: 'absolute',
  w: { base: '70px', md: '100px', lg: '120px' },
  h: { base: '70px', md: '100px', lg: '120px' },
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  backgroundColor: 'brown.trans',
};
export const aboutSectionHero: BoxProps = {
  as: 'section',
  display: 'flex',
  flexDir: 'column',
  h: '758px',
  w: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundPosition: 'right center ',
  backgroundRepeat: 'no-repeat ',
  backgroundSize: 'cover',
  background: ' url(/assets/unilorinbg.png)',
};
export const aboutSmHeading: TextProps = {
  as: 'h2',
  fontSize: '32px',
  textAlign: 'center',
  mb: '8px',
  color: 'brown.trans',
};
