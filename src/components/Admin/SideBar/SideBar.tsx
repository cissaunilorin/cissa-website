import { FC } from 'react';
import {
  Box,
  Image,
  List,
  ListItem,
  ListIcon,
  Icon,
  Link,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import Logo from '../../Logo/Logo';
import { MdDashboard, MdNoteAdd, MdSchool } from 'react-icons/md';
import { linkStyle } from './style';
import { FaUserFriends } from 'react-icons/fa';
import { AiFillSetting } from 'react-icons/ai';
import { BsCalendar3EventFill } from 'react-icons/bs';
import { BiBook } from 'react-icons/bi';

const links = [
  { link: '/admin', title: 'Overview', icon: MdDashboard },
  { link: '/admin/executives', title: 'Executives', icon: FaUserFriends },
  { link: '/admin/blog', title: 'Blog', icon: MdNoteAdd },
  { link: '/admin/event', title: 'Event', icon: BsCalendar3EventFill },
  { link: '/admin/faculty', title: 'Faculty', icon: MdSchool },
  { link: '/admin/courses', title: 'Courses', icon: BiBook },
  { link: '/admin/settings', title: 'Settings', icon: AiFillSetting },
];

const SideBar: FC = () => {
  const router = useRouter();

  return (
    <Box as="nav" flex="0 0 240px" backgroundColor="brown.brown">
      <Box ml="44px" mt="42px" mb="80px">
        <Logo />
      </Box>

      <List ml="48px">
        {links.map((list, i) => (
          <ListItem
            key={i}
            opacity={router.pathname === list.link ? '1' : '0.4'}
            height="48px"
            transition="opacity .3s"
            color={'brown.trans'}
            _hover={{
              opacity: '1',
            }}
          >
            <NextLink href={list.link} passHref>
              <Link {...linkStyle}>
                <ListIcon as={list.icon} />

                {list.title}
              </Link>
            </NextLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default SideBar;
