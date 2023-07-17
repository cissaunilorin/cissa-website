import {
  BoxProps,
  ButtonProps,
  FlexProps,
  HeadingProps,
  LinkProps,
  TextProps,
} from '@chakra-ui/react';

export const aboutSectionHistory: BoxProps = {
  as: 'section',
  m: '100px 0',
};

export const leaderLink: LinkProps = {
  marginRight: '2',
  bg: '#F3F2F2',
  p: '2',
  rounded: 'full',
};

export const mainTextWrapper: BoxProps = {
  w: '80%',
  margin: 'auto',

  color: '#814226',
  my: { base: '8', md: '16' },
};

export const mainTextBox: BoxProps = {
  mt: { base: '12', md: '24', lg: '36' },
  w: 'fit-content',
  textAlign: 'center',
  margin: 'auto',
};

export const mainText: TextProps = {
  fontSize: '1.2rem',
  opacity: '70%',
};
export const aboutPrimaryHeading: HeadingProps = {
  fontSize: '40px',
  fontWeight: 700,
  color: 'brown.deep',
  mb: '40px',
};
