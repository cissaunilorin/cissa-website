import { FlexProps, TextProps, BoxProps } from '@chakra-ui/react';

export const mainWrapper: FlexProps = {
    textAlign: "center",
    direction: "column",
    justifyContent: "center",
    w: "90%",
    ml: 'auto'
};

export const supportText: TextProps = {
    fontWeight: 400,
    fontSize: '20px',
    lineHeight: '26px',
    textAlign: 'center',
    color: 'grey.text',
    mt: 2
};

export const resourcedots1: BoxProps = {
    top: '-32%',
    left: '23%'
};

export const mainImages: BoxProps = {
    alignSelf: 'flex-end',
    alignItems: 'center',
    columnGap: '2rem'
}