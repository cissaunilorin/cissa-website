import { BoxProps, HeadingProps, TextProps } from '@chakra-ui/react';

export const resourceContainer: BoxProps = {
  as: 'section',
  mb: { base: '25px', lg: '135px' },
  pb: { base: '100px', lg: '200px' },
};

export const resourceBoxHeading: HeadingProps = {
  fontWeight: 700,
  fontSize: '20px',
  lineHeight: '100%',
  color: 'brown.deep',
};

export const resourceText: TextProps = {
  fontWeight: 400,
  fontSize: '18px',
  lineHeight: '25.2px',
  mb: '40px',
  mt: '16px',
  color: 'grey.text',
  maxW: { base: ' 100%', md: '100%', lg: ' 434px' },
};
export const resourceBoximg: BoxProps = {
  position: 'relative',
};
export const resourcedots1: BoxProps = {
  top: '-5%',
  left: '-5%',
};
export const resourcedots2: BoxProps = {
  bottom: '-5%',
  right: '-5%',
};
export const resourceIcons: TextProps = {
  backgroundColor: 'brown.deep',
  padding: { base: '10px', md: '15px' },
  borderRadius: '50%',
};
export const resourceImgTags: BoxProps = {
  alignItems: 'center',
  padding: '8px 13px 9px 26px',
  w: '276px',
  position: 'absolute',
  gap: '16px',
  borderRadius: '10px',
  boxShadow: '0px 7.67208px 46.0325px rgba(38, 45, 118, 0.08)',
  background: '#fff',
};
export const resourceImgTag1: BoxProps = {
  top: '45%',
  left: { base: '0', md: '-70px' },
};
export const resourceImgTag2: BoxProps = {
  top: '7%',
  right: { base: '0', md: '-70px' },
};
export const resourceImgTag3: BoxProps = {
  bottom: '-10%',
  // right: '50%',
  left: { md: '25%' },
  right: { base: '0' },
};
export const resourceSmallText: TextProps = {
  fontWeight: 400,
  fontSize: { base: '12px', md: '16px' },
  lineHeight: { base: '16px', md: '20px' },
  color: 'brown.deep',
};
