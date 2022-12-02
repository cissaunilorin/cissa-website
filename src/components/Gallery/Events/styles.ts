import { BoxProps, ButtonProps } from '@chakra-ui/react';

export interface navItemsProps {
    name: string,
    active: boolean,
}

export const EventsProps: BoxProps = {
    w: '70%',
    mx: 'auto',
    mb: '3rem'
}

export const NavsProps: BoxProps = {
    w: 'max-content',
    mx: 'auto',
    gap: '2rem',
    alignItems: 'center',
    mb: '5rem'
}

export const NavProps: ButtonProps = {
    bg: '#FFF2EC',
    color: '#814226',
    paddingX: '1.2rem',
    paddingY: '.5rem',
    borderRadius: '7.06667px',
}

export const ActiveNavProps: ButtonProps = {
    bg: '#814226',
    color: '#FFF2EC',
    paddingX: '1.2rem',
    paddingY: '.5rem',
    borderRadius: '7.06667px'
}