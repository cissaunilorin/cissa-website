import { extendTheme } from '@chakra-ui/react';
import { Button } from './components/button';

const colors = {
  brown: {
    trans: '#FFF2EC',
    light: '#CDA898',
    brown: '#C0917C',
    deep: '#814226',
  },
  app: {
    black: '#464646',
  },
  success: {
    active: '#23AB0D',
    hover: '#65C455',
  },
  faliure: {
    active: '#F00A0A',
    hover: '#F66C6C',
  },
  grey: {
    text: '#84736C',
    light: '#B4A097',
    greyscale: '#A3ABAD',
    greyscaleLight: '#D1D5D6',
  },
};

export const theme = extendTheme({
  colors,
  styles: {
    global: {
      body: {
        backgroundColor: 'white',
        WebkitTapHighlightColor: 'transparent',
      },
    },
  },
  fonts: {
    body: "'Work Sans', sans-serif",
    heading: "'Work Sans', sans-serif",
    mono: "'Work Sans', sans-serif",
  },
  components: {
    Button,
  },
});
