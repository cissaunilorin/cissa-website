import { FC } from 'react';
import {
  Box,
  Button,
  Flex,
  ListItem,
  Text,
  UnorderedList,
} from '@chakra-ui/react';
import ChakraNextImage from '../../../components/chakra-nextimage';
import {
  FaBookmark,
  FaEllipsisH,
  FaFacebook,
  FaHandshake,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';
import {
  blogAuthorDetailsWrapper,
  blogAuthorProps,
  blogAvatarProps,
  blogButton,
  blogContentProps,
  blogDateProps,
  blogDetailsFlex,
  blogIconsFlex,
  blogimageProps,
  bottomDetails,
  bottomDetailsProps,
  bottomDetailsWrapper,
  bottomIconsWrapper,
  bottomTextWrapper,
  buttonFlex,
  headerOptions,
  headerText,
  listItemProps,
  listProps,
  mainBlogWrapper,
} from '../../../styles/blog';

const bottomButtons = ['Life as a student', 'Ilorin', 'Hustle', 'Stress'];
const listItems = [
  {
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris, faucibus ac mollis a cras. Nec nec mi facilisis vel erat porttitor integer ultricies habitant.',
  },
  {
    content:
      'Nec pulvinar eleifend pellentesque vel, habitant aliquam. Venenatis ullamcorper mi mauris nisi, a ultricies gravida eget ac. Purus, dolor tempor luctus leo.',
  },
  {
    content:
      'Volutpat ac sed luctus mauris, malesuada lectus eros ultricies nisi. Congue sapien hendrerit dui iaculis tortor nec sagittis, morbi. Vehicula cras sed tortor nisl, amet sed. Habitant felis tempor vitae nam massa.',
  },
];

const BlogPost: FC = () => {
  return (
    <Box {...mainBlogWrapper}>
      <Text {...headerText} fontSize={{ base: '22px', md: '34px' }}>
        The hustle and stress of the streets of Ilorin
      </Text>
      <Flex {...headerOptions}>
        <Flex {...blogDetailsFlex}>
          <ChakraNextImage src="/assets/blogavatar.png" {...blogAvatarProps} />
          <Flex flexDir="column" marginInlineStart="4">
            <Text {...blogAuthorProps}>Rukayah Bisi</Text>
            <Text {...blogDateProps}>Aug 21, 2015. 1 min read</Text>
          </Flex>
        </Flex>
        <Flex {...blogIconsFlex} my={{ base: '5', md: '0' }}>
          <FaTwitter size="26" />
          <FaLinkedin size="26" />
          <FaFacebook size="26" />
          <FaBookmark size="26" />
          <FaEllipsisH size="26" />
        </Flex>
      </Flex>

      <ChakraNextImage src="/assets/blogdetailsimg.png" {...blogimageProps} />

      <Text {...blogContentProps}>
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
      <UnorderedList {...listProps}>
        {listItems.map((item, index) => (
          <ListItem key={index} {...listItemProps}>
            {item.content}
          </ListItem>
        ))}
      </UnorderedList>

      <ChakraNextImage src="/assets/blogdetailsimg2.png" {...blogimageProps} />

      <Text {...blogContentProps}>
        Volutpat ac sed luctus mauris, malesuada lectus eros ultricies nisi.
        Congue sapien hendrerit dui iaculis tortor nec sagittis, morbi. Vehicula
        cras sed tortor nisl, amet sed. Habitant felis tempor vitae nam massa.
      </Text>
      <Flex {...buttonFlex}>
        {bottomButtons.map((button, index) => (
          <Button {...blogButton} key={index}>
            {button}
          </Button>
        ))}
      </Flex>
      <Flex {...bottomDetails}>
        <Flex {...bottomDetailsWrapper}>
          <Flex {...blogDetailsFlex}>
            <FaHandshake size="30" />
            <Text {...bottomTextWrapper}>2 claps</Text>
          </Flex>
          <Flex {...bottomIconsWrapper}>
            <FaTwitter size="26" />
            <FaLinkedin size="26" />
            <FaFacebook size="26" />
            <FaBookmark size="26" />
            <FaEllipsisH size="26" />
          </Flex>
        </Flex>
      </Flex>
      <Flex {...blogAuthorDetailsWrapper}>
        <ChakraNextImage src="/assets/blogavatar.png" w="14" h="14" />
        <Flex {...bottomDetailsProps}>
          <Text {...blogDateProps}>WRITTEN BY</Text>
          <Text {...blogAuthorProps}>Rukayat Bisi</Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default BlogPost;
