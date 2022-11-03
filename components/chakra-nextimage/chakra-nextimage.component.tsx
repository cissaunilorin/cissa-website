import { FC } from 'react';
import { Flex } from '@chakra-ui/react';
import NextImage, { ImageLoaderProps } from 'next/image';
import { IChakraNextImageProps } from './chakra-nextimage.types';

export const ChakraNextImage: FC<IChakraNextImageProps> = (props) => {
  const { src, alt, ...rest } = props;
  const myLoader = (resolverProps: ImageLoaderProps): string => {
    return `${resolverProps.src}?w=${resolverProps.width}&q=${resolverProps.quality}`;
  };

  const toBase64 = (str: string) =>
    typeof window === 'undefined'
      ? Buffer.from(str).toString('base64')
      : window.btoa(str);

  const shimmer = (w: number, h: number) => `
  <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <linearGradient id="g">
        <stop stop-color="#A69898"  />
   
        <stop stop-color="#F7EFEb" />
        <stop stop-color="hsl(200,20%,106%)" />
      </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="#F7EFEb" />
    <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
    <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
  </svg>`;
  return (
    <Flex position="relative" overflow={'hidden'} {...rest}>
      <NextImage
        loader={myLoader}
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
        objectFit="cover"
        layout="fill"
        src={src}
        alt={alt}
      />
    </Flex>
  );
};
