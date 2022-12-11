import type { ComponentStyleConfig } from '@chakra-ui/theme';

export const Button: ComponentStyleConfig = {
  // The styles all button have in common
  baseStyle: {
    fontWeight: 500,
    borderRadius: '5px',
    _hover: {
      shadow: 'none',
    },
    _focus: {
      shadow: 'none',
    },
    _disabled: {
      bg: '#BFB9B7',
    },
  },

  // Two sizes: sm and md
  sizes: {
    sm: {},
    md: {},
  },

  // Two variants: outline and solid
  variants: {
    outline: {
      border: '1.5px solid',
      borderColor: 'brown.deep',
      color: '#793518',
      _hover: {
        bg: 'brown.light',
        color: 'white',
      },
    },
    outlineWhite: {
      border: '1.5px solid',
      borderColor: '#FFF2EC',
      color: '#FFF2EC',
      _hover: {
        borderColor: '#FFF2EC',
        color: '#FFF2EC',
      },
    },
    dark: {
      bg: '#793518',
      color: 'white',
      _hover: {
        bg: 'brown.light',
        color: 'white',
      },
      _active: {
        bg: 'brown.deep',
        color: 'white',
      },
      _focus: {
        bg: 'brown.deep',
        color: 'white',
      },
    },
    solid: {
      bg: '#BB8872',
      color: 'white',
      _hover: {
        bg: 'brown.light',
        color: 'white',
      },
      _active: {
        bg: 'brown.deep',
        color: 'white',
      },
      _focus: {
        bg: 'brown.deep',
        color: 'white',
      },
    },
    light: {
      bg: 'brown.trans',
      color: 'brown.deep',
      _hover: {
        bg: 'brown.trans',
        color: 'brown.deep',
      },
      _active: {
        bg: 'brown.trans',
        color: 'brown.deep',
      },
      _focus: {
        bg: 'brown.trans',
        color: 'brown.deep',
      },
    },
  },

  defaultProps: {
    variant: 'solid',
  },
};
