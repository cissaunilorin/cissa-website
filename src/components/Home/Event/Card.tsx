import { FC } from 'react';
import Image from 'next/image';
import ChakraNextImage from '../../chakra-nextimage';
import { Box, Text, Flex, Button } from '@chakra-ui/react';
import {
  cardImg,
  card,
  cardDetails,
  cardDetailsTitle,
  cardDetailsPrice,
  cardDetailsIconInfo,
  otherInfo,
  cardbtn1,
  cardbtn2,
  cardAttendInfo,
  cardAttendInfoAttendance,
} from './styles';
import moment from 'moment';
import { Event } from '../../../../prisma/generated/prisma-client-js';

const Card: FC = (props: Event) => {
  return (
    <Box {...card}>
      <ChakraNextImage src={props.imageUrl} {...cardImg} />
      <Box>
        <Box {...cardDetails}>
          <Flex {...cardDetailsTitle}>
            <Text>{props.title}</Text>
            <Text {...cardDetailsPrice}>{props.price}</Text>
          </Flex>
          <Flex {...cardDetailsIconInfo}>
            <Image
              src={'/images/icons/calendar.svg'}
              width={20}
              height={20}
              alt='calendar'
            />
            <Text>{moment(props?.date).format('MMM Do, YYYY')}</Text>
          </Flex>
          <Flex {...cardDetailsIconInfo}>
            <Image
              src={'/images/icons/pin_drop.svg'}
              width={20}
              height={20}
              alt='calendar'
            />
            <Text>{props.venue}</Text>
          </Flex>
          {/* {props.attending ? (
            <Box {...cardAttendInfo}>
              <Text {...cardAttendInfoAttendance}>
                50 others would be Attending too
              </Text>
              <Text>See you there!</Text>
            </Box>
          ) : null} */}
        </Box>
        {/* {!props.attending ? (
          <Flex {...otherInfo}>
            <Text>Attending ?</Text>
            <Flex>
              <Button {...cardbtn1}>Yes</Button>
              <Button {...cardbtn2}>No</Button>
            </Flex>
          </Flex>
        ) : null} */}
      </Box>
    </Box>
  );
};

export default Card;
