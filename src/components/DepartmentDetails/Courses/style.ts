import { BoxProps, HeadingProps, TextProps } from '@chakra-ui/react';
export const coursesHeading: TextProps = {
  fontSize: '40px',
  color: 'brown.deep',
  textAlign: 'center',
  mb: '20px',
};

export const courseBoxes: BoxProps = {
  display: 'grid',
  gridTemplateColumns: { base: '1fr', md: '1fr 1fr', lg: '1fr 1fr' },
  placeItems: 'center',
  gap: '40px',
};
export const courseLvl: TextProps = {
  fontSize: '20px',
  fontWeight: 600,
};
export const courseList: BoxProps = {
  flexDirection: 'column',
};
// between
