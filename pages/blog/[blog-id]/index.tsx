import {
  Box,
  Button,
  Flex,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { FC } from "react";
import ChakraNextImage from "../../../components/chakra-nextimage";

const bottomButtons = ["Life as a student", "Ilorin", "Hustle", "Stress"];
const listItems = [
  {
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris, faucibus ac mollis a cras. Nec nec mi facilisis vel erat porttitor integer ultricies habitant.",
  },
  {
    content:
      "Nec pulvinar eleifend pellentesque vel, habitant aliquam. Venenatis ullamcorper mi mauris nisi, a ultricies gravida eget ac. Purus, dolor tempor luctus leo.",
  },
  {
    content:
      "Volutpat ac sed luctus mauris, malesuada lectus eros ultricies nisi. Congue sapien hendrerit dui iaculis tortor nec sagittis, morbi. Vehicula cras sed tortor nisl, amet sed. Habitant felis tempor vitae nam massa.",
  },
];

const BlogPost: FC = () => {
  return (
    <Box
      maxW="814px"
      w="95%"
      marginX="auto"
      marginY="120px"
      textAlign="left"
      color="#814226"
    >
      <Text
        fontSize={{ base: "22", md: "34px" }}
        fontWeight="bold"
        textAlign="center"
      >
        The hustle and stress of the streets of Ilorin
      </Text>

      <ChakraNextImage
        marginY="5"
        src="/assets/blogdetailsimg.png"
        h={{ base: "240px", md: "400px" }}
        w="full"
        borderRadius="14px"
      />

      <Text fontSize={{ base: "14", md: "18" }} w="95%" marginX="auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris,
        faucibus ac mollis a cras. Nec nec mi facilisis vel erat porttitor
        integer ultricies habitant. Convallis amet donec eget vitae at tincidunt
        in natoque. Massa id at habitasse sit. Id augue curabitur nunc elementum
        orci donec sagittis quam. Nibh vestibulum nulla eu habitasse egestas sit
        dolor. A, aliquam ut nulla libero, morbi id porttitor. Urna at
        pellentesque varius parturient id sit nunc id. Lacus nulla lorem ante at
        viverra id. Neque nisi, auctor odio dis libero, scelerisque. Nec
        pulvinar eleifend pellentesque vel, habitant aliquam. Venenatis
        ullamcorper mi mauris nisi, a ultricies gravida eget ac. Purus, dolor
        tempor luctus leo. Quam diam mi amet, tincidunt consectetur nulla cursus
        arcu cursus. Varius ultrices integer morbi lorem urna, amet sit egestas.
        Interdum elementum purus elementum orci nulla sociis sit elit.
      </Text>
      <UnorderedList
        w="90%"
        marginX="auto"
        marginY="18"
        fontSize={{ base: "14", md: "18" }}
        opacity="0.9"
      >
        {listItems.map((item, index) => (
          <ListItem key={index} marginY="6">
            {item.content}
          </ListItem>
        ))}
      </UnorderedList>

      <ChakraNextImage
        marginY="5"
        src="/assets/blogdetailsimg2.png"
        h={{ base: "240px", md: "400px" }}
        w="full"
        borderRadius="14px"
      />

      <Text fontSize={{ base: "14", md: "18" }} w="95%" marginX="auto">
        Volutpat ac sed luctus mauris, malesuada lectus eros ultricies nisi.
        Congue sapien hendrerit dui iaculis tortor nec sagittis, morbi. Vehicula
        cras sed tortor nisl, amet sed. Habitant felis tempor vitae nam massa.
      </Text>
      <Flex marginY="6" w="95%" marginX="auto">
        {bottomButtons.map((button, index) => (
          <Button
            key={index}
            marginRight="4"
            color="#814226"
            bgColor="#FFF2EC"
            fontSize={{ base: "14", md: "18" }}
          >
            {button}
          </Button>
        ))}
      </Flex>
    </Box>
  );
};

export default BlogPost;
