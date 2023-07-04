import { NextPage } from "next";
import {
  FormBox,
  contactWrapper,
  contactComponentsContainer,
  contactSummary,
  contactSummaryHeading,
} from "../styles/pages/contact";
import { mainBoxStyle } from "../styles/common";
import {
  Text,
  Box,
  Heading,
  Input,
  Flex,
  Button,
  Textarea,
  FormLabel,
} from "@chakra-ui/react";

const Contact: NextPage = () => (
  <Box {...mainBoxStyle} {...contactWrapper}>
    <Box textAlign={"center"}>
      <Heading {...contactSummaryHeading}>Contact us</Heading>
      <Text {...contactSummary}>
        We look forward to hearing from you and exploring potential
        collaborations that can contribute to the exciting world of computer
        science and information technology.
      </Text>
    </Box>
    <Box {...FormBox}>
      <Flex
        align={"center"}
        flexDir={"column"}
        alignItems={"flex-start"}
        flexWrap={"wrap"}
        mt={"20px"}
      >
        <FormLabel color={"#84736C"} htmlFor="name">
          Name
        </FormLabel>
        <Input type="text" id="name" />
      </Flex>

      <Flex
        align={"center"}
        flexDir={"column"}
        alignItems={"flex-start"}
        flexWrap={"wrap"}
        mt={"20px"}
      >
        <FormLabel color={"#84736C"} htmlFor="email">
          Email
        </FormLabel>
        <Input type="email" id="email" />
      </Flex>
      <Flex
        align={"center"}
        alignItems={"flex-start"}
        flexWrap={"wrap"}
        mt={"20px"}
      >
        <FormLabel color={"#84736C"} htmlFor="subject">
          Subject
        </FormLabel>
        <Input type="text" id="subject" />
      </Flex>
      <Flex
        align={"center"}
        flexDir={"column"}
        alignItems={"flex-start"}
        flexWrap={"wrap"}
        mt={"20px"}
      >
        <FormLabel color={"#84736C"} htmlFor="message">
          Message
        </FormLabel>
        <Textarea id="message" rows={4} />
      </Flex>
      <Button bg={"#814226"} mt={"20px"} type="submit">
        Send Message
      </Button>
    </Box>
  </Box>
);

export default Contact;
