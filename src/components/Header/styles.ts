import {
  BoxProps,
  LinkProps,
  ListItemProps,
  ListProps,
} from '@chakra-ui/react';

export const headerBox: BoxProps = {
  as: 'header',
  boxShadow: '0px 0px 27px 1px rgba(120, 53, 24, 0.12)',
  bg: 'white',
  py: '17px',
  position: 'fixed',
  top: '0',
  left: '0',
  right: '0',
  zIndex: '100',
};

export const linkStyle = (bol: boolean): LinkProps => ({
  textDecorationLine: 'none',
  fontFamily: 'Inter',
  fontWeight: 600,
  fontSize: '16px',
  lineHeight: '25px',
  color: bol ? 'brown.deep' : 'grey.text',
  _focus: {
    textDecorationLine: 'none',
  },
  _hover: {
    textDecorationLine: 'none',
  },
});

export const listStyle = (bol: boolean): ListItemProps => ({
  position: 'relative',
  py: '5px',
  _after: {
    content: '""',
    position: 'absolute',
    height: '2px',
    width: '80%',
    bgColor: bol ? 'brown.deep' : '',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
  },
});
