import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: 'white',
        '-webkit-tap-highlight-color': 'transparent',
      },
    },
  },
  fonts: {
    body: "'Nunito', sans-serif",
    heading: "'Nunito', sans-serif",
    mono: "'Nunito', sans-serif",
  },
});
