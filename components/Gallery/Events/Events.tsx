import { useState } from 'react';
import { Text, Box, Flex, Button } from '@chakra-ui/react';
import {
  EventsProps,
  NavsProps,
  NavProps,
  navItemsProps,
  ActiveNavProps,
} from './styles';
import GridPictures from '../GridPictures/GridPictures';

const Events = () => {
  const [navs, setNavs] = useState<navItemsProps[]>([
    {
      name: 'Faculty events',
      active: true,
    },
    {
      name: 'School events',
      active: false,
    },
    {
      name: 'Dinner',
      active: false,
    },
    {
      name: 'Game events',
      active: false,
    },
    {
      name: 'Concerts',
      active: false,
    },
  ]);

  return (
    <Box {...EventsProps}>
      <Flex {...NavsProps}>
        {navs.map((each, index) => (
          <Button {...(each?.active ? ActiveNavProps : NavProps)} key={index}>
            {each.name}
          </Button>
        ))}
      </Flex>

      <GridPictures />
    </Box>
  );
};

export default Events;
