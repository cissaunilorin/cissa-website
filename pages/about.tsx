import { Box, Flex, Text, Heading, Link } from "@chakra-ui/react";
import Slider from "react-slick";
import ChakraNextImage from "../components/chakra-nextimage";
import { Button } from "@chakra-ui/react";
import { FaPlay, FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { mainBoxStyle } from "../styles/common";
import {
  aboutSectionHero,
  iconDepartmentBoxProps,
  departmentBoxProps,
  aboutSectionHistory,
  aboutSmHeading,
  aboutPrimaryHeading,
  aboutDepartmentProps,
  aboutHistoryText,
  departmentBoxHeading,
  departmentBoxSummary,
  aboutLgHeading,
  aboutHistoryPlayCircle,
  mainTextWrapper,
  mainTextBox,
  mainTextHeading,
  mainText,
  leaderWrapper,
  leaderImage,
  leaderFlex,
  leaderLink,
  leaderButton,
  studentBodyFlex,
  studentBodyWrapper,
  studentBodyImage,
} from "../styles/pages/about";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1150,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
  ],
};

const settingsThree = {
  dots: false,
  variableWidth: true,
  infinite: true,
  autoplay: true,
  speed: 20000,
  autoplaySpeed: 0,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 1150,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
  ],
};

const settingsTwo = {
  dots: false,
  infinite: true,
  variableWidth: true,
  autoplay: true,
  speed: 20000,
  autoplaySpeed: 0,
  cssEase: "linear",
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 1150,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 1300,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
  ],
};

const facultyLeaders = [
  {
    name: "Queen Hearts",
    title: "H.O.D Information and Communication Science",
    imageSrc: "/assets/woman.png",
  },
  {
    name: "Adebayo Fawaz",
    title: "Faculty Dean",
    imageSrc: "/assets/man.png",
  },
  {
    name: "Queen MyLove",
    title: "Faculty Sub Dean",
    imageSrc: "/assets/oldman.png",
  },
  {
    name: "Queen Queen",
    title: "Faculty Dean",
    imageSrc: "/assets/woman.png",
  },
];

const studentBody = [
  {
    name: "Olamilekan  Sodiq",
    title: "Faculty President",
    imageSrc: "/assets/man.png",
  },
  {
    name: "Olamilekan Tesleemah",
    title: "Faculty Vice President",
    imageSrc: "/assets/man.png",
  },
  {
    name: "Elijah Oyindamola",
    title: "General Secretary",
    imageSrc: "/assets/man.png",
  },
  {
    name: "Adeleye Abigail",
    title: "Welfare Secretary",
    imageSrc: "/assets/man.png",
  },
  {
    name: "Adeleye Abigail",
    title: "Secretary",
    imageSrc: "/assets/man.png",
  },
];
const Departments = [
  {
    id: 1,
    heading: "Information and Communicaton Science",
    summary:
      "Using Decision Trees,regression and neural networks, our team of experts develops ai models for recommendation systems, forecasting....",
    more: "Learn more",
  },
  {
    id: 2,
    heading: "Telecommunicaton Science",
    summary:
      "Using Decision Trees,regression and neural networks, our team of experts develops ai models for recommendation systems, forecasting....",
    more: "Learn more",
  },
  {
    id: 3,
    heading: "Library & Information Science",
    summary:
      "Using Decision Trees,regression and neural networks, our team of experts develops ai models for recommendation systems, forecasting....",
    more: "Learn more",
  },
  {
    id: 4,
    heading: "Computer Science",
    summary:
      "Using Decision Trees,regression and neural networks, our team of experts develops ai models for recommendation systems, forecasting....",

    more: "Learn more",
  },
  {
    id: 5,
    heading: "Mass Communicaton ",
    summary:
      "Using Decision Trees,regression and neural networks, our team of experts develops ai models for recommendation systems, forecasting....",
    more: "Learn more",
  },
];

const About = () => (
  <>
    <Flex {...aboutSectionHero}>
      <Text {...aboutSmHeading}>Here we are helping to</Text>
      <Text {...aboutLgHeading}>Nuture A Global Village.</Text>
    </Flex>{" "}
    *
    <Box {...aboutSectionHistory}>
      <Box {...mainBoxStyle}>
        <Flex
          direction={{ base: "column", lg: "row" }}
          align="center"
          gap={{ base: "50px", md: "30px", lg: "72px" }}
        >
          <Box>
            <Heading {...aboutPrimaryHeading}>Our History</Heading>
            <Text {...aboutHistoryText}>
              Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam
              suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum
              quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris
              posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At
              feugiat sapien varius id.Eget quis mi enim, leo lacinia pharetra,
              semper. Eget in volutpat mollis at volutpat lectus velit, sed
              auctor. Porttitor fames arcu quis fusce augue enim. Quis at
              habitant diam at. Suscipit tristique risus, at donec. In turpis
              vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac
              volutpat. enim. Quis at habitant diam at. Suscipit tristique
              risus, at donec. In turpis vel et q.
            </Text>
            <Button
              variant={"light"}
              rightIcon={<ArrowForwardIcon fontSize={"24px"} />}
              fontWeight={"700"}
            >
              Read more
            </Button>
          </Box>
          <Box position={"relative"}>
            <ChakraNextImage
              src="/assets/class.png"
              w={{ base: "500px", md: "590px", lg: "600px" }}
              h={{ base: "320px", md: "400px", lg: "560px" }}
              borderRadius="30px"
            />
            <ChakraNextImage
              src="/assets/dotsA.png"
              h={{ base: "150px", md: "170px", lg: "190px" }}
              w={{ base: "200px", md: "250px", lg: "310px" }}
              pos={"absolute"}
              top={"-90px"}
              right={"-50px"}
              zIndex={"-1"}
            />
            <Flex {...aboutHistoryPlayCircle}>
              <FaPlay color={"#814226"} size={"34"} />
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
    <Box {...aboutSectionHistory}>
      <Box {...mainBoxStyle}>
        <Box {...aboutDepartmentProps}>
          <Heading {...aboutPrimaryHeading}>5 Awesome Departments.</Heading>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et.
          </Text>
        </Box>
      </Box>
      <Box padding={"0 40px"}>
        <Slider {...settings}>
          {Departments.map((department) => {
            return (
              <Box {...departmentBoxProps} key={department.id}>
                <Flex {...iconDepartmentBoxProps}>
                  <ChakraNextImage
                    src="/assets/Workbag.png"
                    h={"41.67px"}
                    w={"41.67px"}
                  />
                </Flex>
                <Heading {...departmentBoxHeading}>
                  {department.heading}
                </Heading>
                <Text {...departmentBoxSummary}>{department.summary}</Text>
                <Text>
                  {department.more}
                  <ArrowForwardIcon />
                </Text>
              </Box>
            );
          })}
        </Slider>
      </Box>
    </Box>
    <Box {...mainTextWrapper}>
      <Box {...mainTextBox}>
        <Heading {...mainTextHeading}>Faculty Leadership</Heading>
        <Text {...mainText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et.
        </Text>
      </Box>
      <Slider {...settingsThree}>
        {facultyLeaders.map((leader) => (
          <Box key={leader.title} {...leaderWrapper}>
            <ChakraNextImage src={leader.imageSrc} {...leaderImage} />
            <Flex {...leaderFlex}>
              <Box w="100%">
                <Heading fontSize="1.5rem">{leader.name}</Heading>
                <Text fontSize="1rem" mt="2">
                  {leader.title}
                </Text>
                <Flex mt="4">
                  <Link
                    _hover={{ bg: "#814226", _first: { color: "#F3F2F2" } }}
                    {...leaderLink}
                  >
                    <FaTwitter size="20px" />
                  </Link>
                  <Link
                    _hover={{ bg: "#814226", _notFirst: { color: "#F3F2F2" } }}
                    {...leaderLink}
                  >
                    <FaFacebook size="20px" />
                  </Link>
                  <Link
                    _hover={{ bg: "#814226", _last: { color: "#F3F2F2" } }}
                    {...leaderLink}
                  >
                    <FaLinkedin size="20px" />
                  </Link>
                </Flex>
              </Box>
              <Button {...leaderButton}>&#8594;</Button>
            </Flex>
          </Box>
        ))}
      </Slider>
    </Box>
    <Box {...mainTextWrapper}>
      <Box {...mainTextBox}>
        <Heading {...mainTextHeading}>Student Body</Heading>
        <Text {...mainText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et.
        </Text>
      </Box>
      <Slider {...settingsTwo}>
        {studentBody.map((leader) => (
          <Flex key={leader.title} {...studentBodyWrapper}>
            <ChakraNextImage src={leader.imageSrc} {...studentBodyImage} />
            <Flex {...studentBodyFlex}>
              <Box w="100%">
                <Heading fontSize="1.2rem">{leader.name}</Heading>
                <Text fontSize=".8rem" mt="2">
                  {leader.title}
                </Text>
                <Flex mt="4">
                  <Link
                    _hover={{ bg: "#814226", _first: { color: "#F3F2F2" } }}
                    {...leaderLink}
                  >
                    <FaTwitter size="20px" />
                  </Link>
                  <Link
                    _hover={{ bg: "#814226", _notFirst: { color: "#F3F2F2" } }}
                    {...leaderLink}
                  >
                    <FaFacebook size="20px" />
                  </Link>
                  <Link
                    _hover={{ bg: "#814226", _last: { color: "#F3F2F2" } }}
                    {...leaderLink}
                  >
                    <FaLinkedin size="20px" />
                  </Link>
                </Flex>
              </Box>
            </Flex>
          </Flex>
        ))}
      </Slider>
    </Box>
  </>
);

export default About;
