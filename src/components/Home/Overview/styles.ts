import {
  BoxProps,
  ButtonProps,
  HeadingProps,
  LinkProps,
  ListItemProps,
  TextProps,
} from '@chakra-ui/react';

export const heading: HeadingProps = {
  fontWeight: 700,
  fontSize: '32px',
  lineHeight: '44px',
  mb: '40px',
  color: '#FFF2EC',
};

export const listStyle: ListItemProps = {
  w: '40px',
  h: '40px',
  border: '1px solid #FFF2EC',
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 0,
};

export const iconStyle: BoxProps = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
};

export const iconButton: ButtonProps = {
  variant: 'outlineWhite',
  w: '28px',
  h: '28px',
  minW: 'unset',
  mb: '16px',
  borderRadius: '50%',
  display: 'block',
};

export const NewsTextBox: BoxProps = {
  borderTop: '4px solid #BB7402',
  transform: 'rotate(-90deg)',
  // width: '66px',
  textAlign: 'center',
  fontWeight: 500,
  fontSize: '14px',
  lineHeight: '15px',
  color: '#FFF2EC',
  pt: '8px',
  px: '16px',
};

export const annoucementHeading: HeadingProps = {
  fontWeight: 600,
  fontSize: '14px',
  lineHeight: '25px',
  mb: '6px',
};
export const annoucementText: TextProps = {
  fontWeight: 400,
  fontSize: '10px',
  lineHeight: '11px',
  mb: '8px',
};
export const annoucementLink: LinkProps = {
  fontWeight: 600,
  fontSize: '11px',
  lineHeight: '11px',
};
