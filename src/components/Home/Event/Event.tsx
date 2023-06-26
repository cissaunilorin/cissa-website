import { FC } from "react";
import { Box, Heading, Text, Flex, Button, Grid } from "@chakra-ui/react";
import { mainBoxStyle, heading2Style } from "../../../styles/common";
import { featureText, EventProps, flexProp, boxFlexProp } from "./styles";
import Card from "./Card";
const events: EventProps[] = [
  {
    id: 1,
    mainImage: "/assets/events-1.png",
    title: "CISSA Dinner",
    price: "₦5000",
    date: "22 Jun, 2022",
    location: "M & M’s Event Center",
    attending: false,
  },
  {
    id: 2,
    mainImage: "/assets/events-2.png",
    title: "CISSA Dinner",
    price: "₦5000",
    date: "22 Jun, 2022",
    location: "M & M’s Event Center",
    attending: true,
  },
  {
    id: 3,
    mainImage: "/assets/events-3.png",
    title: "CISSA Dinner",
    price: "₦5000",
    date: "22 Jun, 2022",
    location: "M & M’s Event Center",
    attending: false,
  },
  {
    id: 4,
    mainImage: "/assets/events-3.png",
    title: "CISSA Dinner",
    price: "₦5000",
    date: "22 Jun, 2022",
    location: "M & M’s Event Center",
    attending: false,
  },
  {
    id: 5,
    mainImage: "/assets/events-3.png",
    title: "CISSA Dinner",
    price: "₦5000",
    date: "22 Jun, 2022",
    location: "M & M’s Event Center",
    attending: false,
  },
  {
    id: 6,
    mainImage: "/assets/events-3.png",
    title: "CISSA Dinner",
    price: "₦5000",
    date: "22 Jun, 2022",
    location: "M & M’s Event Center",
    attending: false,
  },
];

const Event: FC = () => {
  return (
    <Box as="section" my={"24"}>
      <Box {...mainBoxStyle}>
        <Heading as={"h2"} {...heading2Style} textAlign="center" mb={"8px"}>
          Latest Events
        </Heading>
        <Text {...featureText}>
          Here are some amazing things said by our past students
        </Text>
      </Box>

      <Box {...boxFlexProp}>
        <Flex {...flexProp}>
          {events?.map((event) => (
            <Card {...event} key={event.id} />
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default Event;
