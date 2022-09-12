import { BoxProps, TextProps } from '@chakra-ui/react';

export const blogHeaderContainer: BoxProps = {
  as: 'section',
  pb: '20px',
  pt: '112px',
};
export const blogComponentsContainer: BoxProps = {
  as: 'section',
  pb: '30px',
  pt: '112px',
};
export const blogFlex: BoxProps = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};
export const blogHeaderHeading: TextProps = {
  fontSize: '32px',
  fontWeight: '700',
  mb: '30px',
  color: 'brown.deep',
};
export const blogHeaderSummary: TextProps = {
  fontSize: '18px',
  fontWeight: '500',
  lineHeight: '25.2px',
  color: 'brown.lighter',
  mb: '25px',
};
export const blogPrimaryHeading: TextProps = {
  fontSize: '28px',
  fontWeight: '700',
  color: 'brown.deep',
};

export const blogSecondaryHeading: TextProps = {
  fontSize: '18px',
  fontWeight: '600',
  mb: '24px',
  color: 'brown.deep',
};
export const blogTrendingHeading: TextProps = {
  fontSize: '28px',
  mb: '12px',
  fontWeight: '600',
  lineHeight: '39.2px',
  w: { md: '100%', lg: '455px' },
  maxW: { md: '100%', lg: '100%' },
};
export const blogTrendingDDText: TextProps = {
  fontSize: '20px',
  fontWeight: '700',
  mb: '6px',
};
export const blogSmText: TextProps = {
  fontSize: '16px',
  fontWeight: '600',
  color: 'brown.lighter',
};
