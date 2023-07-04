import { TextProps, BoxProps, ButtonProps, FlexProps } from '@chakra-ui/react';

export const featureText: TextProps = {
  fontWeight: 400,
  fontSize: { base: '18px', md: '20px' },
  lineHeight: { base: '20px', md: '26px' },
  textAlign: 'center',
  color: 'grey.light',
};
export const cardImg: BoxProps = {
  width: '100%',
  css: { aspectRatio: '350/250' },
  borderRadius: '24px 24px 0px 0px',
};
export const card: BoxProps = {
  flex: '0 0 350px',
  height: '100%',
  boxShadow: '0px 4px 14px rgba(0, 0, 0, 0.07)',
  borderRadius: '24px',
};

export const cardDetails: BoxProps = {
  mt: 5,
  pb: 3,
  mb: 4,
  px: 3,
};
export const cardDetailsTitle: BoxProps = {
  color: 'brown.deep',
  fontWeight: 700,
  justifyContent: 'space-between',
  alignItems: 'center',
  fontSize: 20,
};
export const cardDetailsPrice: TextProps = {
  bgColor: 'brown.trans',
  borderRadius: 5,
  padding: 3,
  fontSize: 17,
};
export const cardDetailsIconInfo: TextProps = {
  gap: 3,
  color: 'brown.text',
  fontWeight: 500,
  mt: 2,
};
export const otherInfo: BoxProps = {
  borderTop: '1px solid #E0E0E0',
  alignItems: 'center',
  justifyContent: 'space-between',
  color: 'brown.deep',
  fontWeight: 500,
  px: 3,
  py: 5,
};

export const cardbtn1: ButtonProps = {
  bgColor: 'brown.deep',
  mr: 4,
};

export const cardbtn2: ButtonProps = {
  border: '1px solid',
  borderColor: 'brown.deep',
  color: 'brown.deep',
  bgColor: 'transparent',
};

export const cardAttendInfo: BoxProps = {
  color: 'brown.deep',
  textAlign: 'center',
  fontWeight: 600,
  mt: 6,
  mb: 3,
};

export const cardAttendInfoAttendance: TextProps = {
  fontSize: 14,
  fontStyle: 'italic',
  mb: 1,
  fontWeight: 400,
};

export interface EventProps {
  id: number;
  mainImage: string;
  title: string;
  price: string;
  date: string;
  location: string;
  attending: boolean;
}
