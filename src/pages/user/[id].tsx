import { NextPage } from 'next';
import { heading2Style, mainBoxStyle } from '../../styles/common';
import { Text, Flex, Box, Heading, Link } from '@chakra-ui/react';
import { FaTwitter } from 'react-icons/fa';
import { RiFacebookFill, RiLinkedinFill } from 'react-icons/ri';
import { leaderLink } from '../../styles/pages/about';
import ChakraNextImage from '../../components/chakra-nextimage';

interface excosMemberPropsType {
  name: string;
  role: string;
  socialNetworks: {
    facebook: string;
    twitter: string;
    linkedIn: string;
  };
  about: string;
}

const excosMember: excosMemberPropsType = {
  name: 'Lateef Olamilekan',
  role: 'Faculty President',
  socialNetworks: {
    facebook: '',
    twitter: '',
    linkedIn: '',
  },
  about:
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates quam aspernatur nisi similique neque? Iusto aperiam inventore eaque sit doloremque quas illum beatae, eligendi quis corporis dolore fugit non. Asperiores deleniti quaerat nobis exercitationem consequatur sint magni neque ipsa sapiente voluptate. Optio earum ab beatae sint voluptate porro tenetur aliquid nihil facilis explicabo at in fugiat amet architecto facere reprehenderit, aperiam maiores incidunt, magni vero? Repudiandae quod magni eum cum, blanditiis voluptas est ut dolorum itaque nobis veritatis dolorem libero mollitia eaque aliquam adipisci consectetur assumenda voluptates molestiae distinctio, sapiente labore ab ullam! Provident necessitatibus dolores ducimus aliquid voluptates. Totam dicta itaque minima qui, exercitationem dolor cumque distinctio odio est sint alias incidunt unde et illum molestiae perspiciatis sapiente eveniet possimus! Tempora illum, recusandae, tempore delectus ab beatae assumenda voluptatibus tenetur, totam rerum earum. Iure voluptas dolore atque modi, iste vero deserunt repellendus reprehenderit molestias soluta architecto eos sed minima vitae eaque, dicta deleniti illum ad quam cupiditate asperiores! Repellendus nam cumque culpa ex dolorum ea sequi eius sed. Nihil exercitationem dicta, porro, facere consequuntur quo facilis voluptate minus consectetur tempora esse fugiat ea soluta mollitia corrupti quasi vel voluptas accusamus doloribus quod? Non architecto doloribus officiis odit rerum recusandae!',
};

const excosMembers: NextPage = () => {
  return (
    <Box {...mainBoxStyle} my="150px">
      <Flex flexDirection="column">
        <Flex alignItems="center" flexDirection="row" gap="5rem">
          <ChakraNextImage
            w="100%"
            h="400px"
            src={'/assets/placeholder.png'}
            borderRadius="20px"
          />
          <Box w="100%">
            <Box>
              <Heading {...heading2Style} fontSize="30px">
                {excosMember.name}
              </Heading>
              <Text color="#B4A097" fontSize="20px" fontWeight="600">
                {excosMember.role}
              </Text>
            </Box>
            <Flex mt=".7rem" gap=".6rem">
              <Link {...leaderLink} bg="none" border="1px solid #814226">
                <RiFacebookFill size="16px" color="#814226" />
              </Link>
              <Link {...leaderLink} bg="none" border="1px solid #814226">
                <FaTwitter size="16px" color="#814226" />
              </Link>
              <Link {...leaderLink} bg="none" border="1px solid #814226">
                <RiLinkedinFill size="16px" color="#814226" />
              </Link>
            </Flex>
          </Box>
        </Flex>
        <Box mt="2rem">
          <Text fontSize="27px" mb=".3rem" fontWeight="600">
            About
          </Text>
          <Text w="100%" fontSize="18px" color="#676767">
            {excosMember.about}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default excosMembers;
