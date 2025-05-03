import { FlexProps, BoxProps } from '@chakra-ui/react';
import { IChakraNextImageProps } from '../../chakra-nextimage';

export const cardSectionWrapper: FlexProps = {
  w: '300px',
};

export const cardSectionImage: IChakraNextImageProps = {
  w: '300px',
  borderTopRadius: 'xl',
  css: { aspectRatio: '1/1' },
  src: '/assets/About/Alumni.png',
  alt: 'Alumni Image',
};

export const cardSectionFlex: FlexProps = {
  padding: '40px',
  justifyContent: 'space-around',
};

export const departmentBoxProps: BoxProps = {
  padding: { base: '12px', md: '30px' },
  borderRadius: '16px',
  // maxW: '477px',
  w: '300px !important',
  // h: '464px !important',
  boxShadow:
    '0px 12px 16px rgba(0, 0, 0, 0.03), 0px 4px 6px rgba(16, 24, 40, 0.02)',
};

export const iconDepartmentBoxProps: BoxProps = {
  clipPath:
    'polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)',
  height: '100px',
  width: '100px',
  alignItems: 'center',
  justifyContent: 'center',
  mb: '38px',
  bgColor: 'brown.transDark',
};
