import { FC } from 'react';
import { Box, Heading, Text, Flex, Button } from '@chakra-ui/react';
import { mainBoxStyle, heading2Style } from '../../../styles/common';
import {
  featureText,  
  EventProps
} from './styles';
import Card from './Card';

const Event: FC = () => {
  const events: EventProps[] = [
    {
      id: 1,
      mainImage: '/assets/events-1.png',
      title: 'CISSA Dinner',
      price: '₦5000',
      date: '22 Jun, 2022',
      location: 'M & M’s Event Center',
      attending: false,
    },
    {
      id: 2,
      mainImage: '/assets/events-2.png',
      title: 'CISSA Dinner',
      price: '₦5000',
      date: '22 Jun, 2022',
      location: 'M & M’s Event Center',
      attending: true,
    },
    {
      id: 3,
      mainImage: '/assets/events-3.png',
      title: 'CISSA Dinner',
      price: '₦5000',
      date: '22 Jun, 2022',
      location: 'M & M’s Event Center',
      attending: false,
    },
  ];


  return (
    <Box as='section'>
      <Box {...mainBoxStyle}>
        <Heading as={'h2'} {...heading2Style} textAlign='center' mb={'8px'}>
          Latest Event
        </Heading>
        <Text {...featureText}>
          Here are some amazing things said by our past students
        </Text>

        <Flex mt={'20'} gap={5}>
          {events?.map(event => (
            <Card {...event} key={event.id}/>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default Event;
