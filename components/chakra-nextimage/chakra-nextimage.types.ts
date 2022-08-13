import { FlexProps } from '@chakra-ui/react';
import { ImageProps } from 'next/image';

interface IDefaultProps {}
export interface IChakraNextImageProps
  extends Partial<FlexProps>,
    Partial<IDefaultProps>,
    Pick<ImageProps, 'src' | 'alt'> {}
