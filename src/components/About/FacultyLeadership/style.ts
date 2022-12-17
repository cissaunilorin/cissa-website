import {
  BoxProps,
  ButtonProps,
  FlexProps,
  HeadingProps,
  TextProps,
} from '@chakra-ui/react';
import { IChakraNextImageProps } from '../../chakra-nextimage';

export const leaderImage: IChakraNextImageProps = {
  height: '457px',
  width: '450px',
  borderTopRadius: '3xl',
  src: '',
};

export const leaderFlex: FlexProps = {
  w: '90',
  margin: 'auto',
  mt: '9',
  justifyContent: 'space-around',
};

export const leaderButton: ButtonProps = {
  rounded: 'full',
  p: '3',
  fontSize: 'lg',
  mt: '6',
};

export const leaderWrapper: BoxProps = {
  padding: '40px',
  w: '457px',
  h: '690px',
  rounded: '3xl',
};
