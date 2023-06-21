import { BoxProps, HeadingProps, TextProps } from '@chakra-ui/react';

export const overviewSection: BoxProps = {
  // textAlign: 'center',
  // display: 'flex',
  // alignItems: 'center',
  // flexDir: 'column',
  // justifyContent: 'center',
  w: '100%',
  margin: { base: '120px 0', md: '150px 0', lg: '200px 0' },
};
export const deptGeneralBoxSpacing: BoxProps = {
  margin: { base: '50px 0', md: '150px 0', lg: '200px 0' },
};
export const overviewBox: BoxProps = {
  textAlign: 'center',
};
export const aboutLgHeading: TextProps = {
  as: 'h1',
  fontSize: '56px',
  fontWeight: 700,
  textAlign: 'center',
  color: 'brown.trans',
};

export const overviewHeading: TextProps = {
  fontSize: { base: '40px', md: '50px', lg: ' 65px' },
  color: 'brown.deep',
  mb: '40px',
  // maxW: ,
};
export const socialIcons: BoxProps = {
  alignItems: 'baseline',
  justifyContent: 'center',
  gap: '20px',
};

export const socialIcon: BoxProps = {
  h: '40px',
  w: '40px',
  border: '1px solid #814226',
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};
