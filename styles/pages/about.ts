import { BoxProps, HeadingProps, TextProps } from '@chakra-ui/react';

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
export const aboutSectionHistory: BoxProps = {
  as: 'section',
  m: '210px 0',
};
export const aboutSmHeading: TextProps = {
  as: 'h2',
  fontSize: '32px',
  textAlign: 'center',
  mb: '8px',
  color: 'brown.trans',
};
export const aboutLgHeading: TextProps = {
  as: 'h1',
  fontSize: '56px',
  fontWeight: 700,
  textAlign: 'center',
  color: 'brown.trans',
};
export const aboutPrimaryHeading: HeadingProps = {
  fontSize: '40px',
  fontWeight: 700,
  color: 'brown.deep',
  mb: '40px',
};
export const aboutHistoryText: TextProps = {
  fontSize: '18px',
  lineHeight: '25.2px',
  mb: '40px',
  maxW: { base: ' 100%', md: '100%', lg: ' 434px' },
};
export const aboutHistoryPlayCircle: BoxProps = {
  pos: 'absolute',
  w: { base: '90px', md: '100px', lg: '120px' },
  h: { base: '100px', md: '110px', lg: '126px' },
  top: '40%',
  left: '40%',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  backgroundColor: 'brown.trans',
};
export const aboutDepartmentProps: BoxProps = {
  textAlign: 'center',
  mb: '110px',
};
export const departmentBoxProps: BoxProps = {
  padding: '40px',
  borderRadius: '16px',
  w: '477px !important',
  h: '464px !important',
  boxShadow:
    '0px 12px 16px rgba(0, 0, 0, 0.03), 0px 4px 6px rgba(16, 24, 40, 0.02)',
};
export const iconDepartmentBoxProps: BoxProps = {
  clipPath:
    'polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)',
  padding: '30px',
  height: '120px',
  width: '120px',
  alignItems: 'center',
  justifyContent: 'center',
  mb: '48px',
  borderRadius: '18px',
  bgColor: 'brown.transDark',
};
export const departmentBoxHeading: HeadingProps = {
  fontSize: '28px',
  fontWeight: 700,
  color: 'brown.deep',
  mb: '18px',
};
export const departmentBoxSummary: TextProps = {
  fontSize: '16px',
  lineHeight: '28px',
  color: 'grey.light',
  mb: '24px',
};
