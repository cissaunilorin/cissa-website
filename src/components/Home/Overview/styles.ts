import {
  BoxProps,
  HeadingProps,
  LinkProps,
  ListItemProps,
  ListProps,
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
  border: '1px solid #FFF2EC',
  borderRadius: '50%',
  css: { aspectRatio: '1/1' },
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};
