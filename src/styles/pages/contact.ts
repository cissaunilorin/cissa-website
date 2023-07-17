import { BoxProps, HeadingProps, TextProps } from '@chakra-ui/react';

export const contactWrapper: BoxProps = {
  marginTop: '200px',
  pb: '100px',
};

export const contactComponentsContainer: BoxProps = {
  as: 'section',
  pb: '30px',
  pt: '112px',
};

export const contactSummaryHeading: HeadingProps = {
  fontSize: '38px',
  fontWeight: '700',
  lineHeight: '28px',
  mb: '30px',
  color: 'brown.deep',
};
export const contactSummary: TextProps = {
  fontSize: { base: '16px', md: '18px', lg: '20px' },
  fontWeight: '400',
  lineHeight: '28px',
  color: 'grey.text',
  margin: '0 auto',
  mb: '30px',
  maxWidth: '100%',
  w: '800px',
};
export const mainTextWrapper: BoxProps = {
  w: '80%',
  margin: 'auto',

  color: '#814226',
  my: { base: '8', md: '16' },
};
export const FormBox: BoxProps = {
  margin: '0 auto',
  maxWidth: '100%',
  w: '600px',
};
