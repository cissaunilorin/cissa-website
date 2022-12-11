import { FC, useEffect, useRef, useState } from 'react';
import { Box, Heading, Text, Flex, Button } from '@chakra-ui/react';
import { mainBoxStyle, heading2Style } from '../../../styles/common';
import { featureText, EventProps } from './styles';
import Card from './Card';
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
  {
    id: 4,
    mainImage: '/assets/events-3.png',
    title: 'CISSA Dinner',
    price: '₦5000',
    date: '22 Jun, 2022',
    location: 'M & M’s Event Center',
    attending: false,
  },
  {
    id: 5,
    mainImage: '/assets/events-3.png',
    title: 'CISSA Dinner',
    price: '₦5000',
    date: '22 Jun, 2022',
    location: 'M & M’s Event Center',
    attending: false,
  },
  {
    id: 6,
    mainImage: '/assets/events-3.png',
    title: 'CISSA Dinner',
    price: '₦5000',
    date: '22 Jun, 2022',
    location: 'M & M’s Event Center',
    attending: false,
  },
];

const Event: FC = () => {
  const [margin, setMargin] = useState('');

  const mlRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mlRef.current)
      setMargin(window.getComputedStyle(mlRef.current).marginLeft);
  }, []);

  return (
    <Box as="section">
      <Box {...mainBoxStyle} ref={mlRef}>
        <Heading as={'h2'} {...heading2Style} textAlign="center" mb={'8px'}>
          Latest Event
        </Heading>
        <Text {...featureText}>
          Here are some amazing things said by our past students
        </Text>
      </Box>

      <Box
        overflowX={'auto'}
        ml={margin}
        css={{ '::-webkit-scrollbar': { display: 'none' } }}
      >
        <Flex mt={'20'} gap={5}>
          {events?.map(event => (
            <Card {...event} key={event.id} />
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default Event;
