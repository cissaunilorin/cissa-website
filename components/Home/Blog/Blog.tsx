import { Box, Text, Flex, Button } from "@chakra-ui/react";
import Image from "next/image";
import { FC } from "react";
import { mainBoxStyle } from "../../../styles/common";

const blogCards = [
  {
    title: "All about Crypto",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eros, varius euismod aliquam erat egestas risus nunc faucibus",
    author: "Queen Dare",
    dateCreated: "22 Jun, 2022",
    bgImg: "url(/assets/blogimg.png)",
  },
  {
    title: "All about Crypto",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eros, varius euismod aliquam erat egestas risus nunc faucibus",
    author: "Queen Dare",
    dateCreated: "22 Jun, 2022",
    bgImg: "url(/assets/blogimg2.png)",
  },
  {
    title: "All About Crypto",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eros, varius euismod aliquam erat egestas risus nunc faucibus",
    author: "Queen Dare",
    dateCreated: "22 Jun, 2022",
    bgImg: "url(/assets/blogimg3.png)",
  },
];
const Blog: FC = () => {
  return (
    <Box as="section">
      <Box {...mainBoxStyle}>

        <Flex textAlign="center" direction="column" justifyContent="center">
          <Text
            fontSize={["3xl", "4xl"]}
            color="#814226"
            fontWeight="bold"
            marginBottom="1"
          >
            CIS Blog
          </Text>
          <Text
            fontSize={["md", "xl"]}
            color="#814226"
            fontWeight="light"
            opacity="70%"
          >
            Read amazing articles from brilliant CIS minds.
          </Text>
        </Flex>
        <Flex
          justifyContent="space-between"
          flexWrap="wrap"
          marginY="14"
          gap="32px"
        >
          {blogCards.map((blog) => (
            <>
              <Flex
                bgImg={blog.bgImg}
                width={{ base: "85%", md: "35%", lg: "28%" }}
                height={["350px"]}
                backgroundSize="160%"
                rounded="3xl"
                justifyContent="center"
                alignItems="baseline"
                marginX="auto"
                backgroundRepeat="none"
                padding="0"
                backgroundPosition="center"
                position="relative"
              >
                <Box
                  width="90%"
                  minHeight="50%"
                  backgroundColor="rgba(102, 102, 102, 0.64);"
                  rounded="xl"
                  marginTop={["auto"]}
                  marginBottom={["15px", "15px"]}
                  backdropBlur="lg"
                >
                  <Flex
                    maxWidth="95%"
                    direction="column"
                    margin="auto"
                    marginBlock="6"
                    color="white"
                  >
                    <Flex justifyContent="space-between" alignItems="center">
                      <Text fontSize={["lg", "lg"]} fontWeight="bold">
                        {blog.title}
                      </Text>
                      <div style={{width: "fit-content", marginInlineEnd: "10px"}}>
                      <Image src="/assets/rightarrow.svg" width="20px" height="20px" alt="Read More" style={{filter: "invert(100)", marginBlockStart: "2px"}} />
                      </div>
                    </Flex>
                    <Text fontSize={["sm"]} opacity=".8" mt="2">
                      {blog.description}
                    </Text>
                    <Flex
                      mt="4"
                      opacity=".8"
                      fontSize="sm"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Flex alignItems="center">
                        <Image
                          src="/assets/avatar.png"
                          alt={blog.author}
                          width="30px"
                          height="30px"
                        />
                        <Text ml="2">{blog.author}</Text>
                      </Flex>
                      <Text justifySelf="flex-end" mr="3">
                        {blog.dateCreated}
                      </Text>
                    </Flex>
                  </Flex>
                </Box>
              </Flex>
            </>
          ))}
        </Flex>
        <Flex justifyContent="center">
          <Button
            mb="4"
            rounded="lg"
            height="60px"
            width="50%"
            maxWidth="244px"
            color="white"
          >
            Read More Posts
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default Blog;
