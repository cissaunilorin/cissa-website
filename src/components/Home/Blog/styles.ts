import { BoxProps, ButtonProps, FlexProps, TextProps } from '@chakra-ui/react';

export const readMoreButton: ButtonProps = {};

export const contentBox: BoxProps = {
  w: ['90%', '45%'],
  marginX: 'auto',
};

export const mainWrapper: FlexProps = {
  textAlign: 'center',
  direction: 'column',
  justifyContent: 'center',
};

export const headerText: TextProps = {
  fontSize: ['3xl', '4xl'],
  color: '#814226',
  fontWeight: 'bold',
  marginBottom: '1',
};

export const supportText: TextProps = {
  fontSize: ['md', 'xl'],
  color: '#814226',
  marginTop: '8px',
  fontWeight: 'light',
  opacity: '70%',
};

export const primaryFlex: FlexProps = {
  justifyContent: 'space-between',
  marginY: '14',
  gap: '32px',
  width: 'full',
};

export const secondaryFlex: FlexProps = {
  w: 'full',
  justifyContent: 'space-between',
  flexDirection: 'row',
  flexWrap: 'wrap',
};

export const boxWrapper: BoxProps = {
  w: ['90%', '45%'],
  marginX: 'auto',
};

export const mainBlogCardImage: BoxProps = {
  height: '290px',
  borderRadius: '2xl',
  bgSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

export const mainBlogButton: ButtonProps = {
  rounded: '2xl',
  bgColor: '#FFF2EC',
  color: '#814226',
  marginY: '4',
  height: ['30px', '34px'],
};

export const mainBlogPrimaryText: TextProps = {
  fontWeight: 'bold',
  fontSize: 'large',
  marginBottom: '2',
};

export const mainBlogSecondaryText: TextProps = {
  opacity: '.8',
  marginBottom: '10',
};

export const blogPrimaryText: TextProps = {
  fontWeight: 'bold',
  fontSize: 'medium',
  marginBottom: '2',
  marginStart: '2',
};

export const blogSecondaryText: TextProps = {
  opacity: '.8',
  fontSize: 'sm',
  marginStart: '2',
};

export const blogImageBox: BoxProps = {
  height: '150px',
  flex: { md: '0 0 35%' },
  w: { base: '100%', md: 'unset' },
  marginX: 'auto',
  backgroundSize: 'cover',
  backgroundRepeat: 'none',
  rounded: '2xl',
  mb: { base: '6', md: 'unset' },
  position: 'relative',
};

export const blogContent: BoxProps = {
  // width: "60%",
  marginX: 'auto',
};
export const blogButton: ButtonProps = {
  rounded: 'xl',
  bgColor: '#FFF2EC',
  color: '#814226',
  marginY: '4',
  height: ['25px', '20px'],
  fontSize: 'sm',
  position: 'absolute',
  bottom: '0',
  left: '1',
};
