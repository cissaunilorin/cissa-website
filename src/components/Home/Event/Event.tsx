import { FC, useEffect, useRef, useState } from 'react';
import { Box, Heading, Text, Flex, Button, Grid } from '@chakra-ui/react';
import { mainBoxStyle, heading2Style } from '../../../styles/common';
import { featureText } from './styles';
import Card from './Card';
import { Event } from '../../../types/types';

const Event: FC<{ events: Event[] }> = ({ events }) => {
  const [margin, setMargin] = useState('');

  const mlRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mlRef.current)
      setMargin(window.getComputedStyle(mlRef.current).marginLeft);
  }, []);

  return (
    <Box as='section' my={'24'}>
      <Box {...mainBoxStyle} ref={mlRef}>
        <Heading as={'h2'} {...heading2Style} textAlign='center' mb={'8px'}>
          Latest Events
        </Heading>
        <Text {...featureText}>
          The faculty of Communication and Information science showcases
          it&apos;s academic, empowerment and entertaining strength in the
          annual events that focuses on the growth of the students.
        </Text>
      </Box>

      <Box
        overflowX={'auto'}
        ml={margin}
        py='20px'
        css={{ '::-webkit-scrollbar': { display: 'none' } }}>
        <Flex mt={'12'} gap={5}>
          {events?.slice(0, 5).map((event) => (
            <Card {...event} key={event.id} />
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default Event;
