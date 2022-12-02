import { FC } from 'react';
import { Box, Image, List, ListItem, ListIcon } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Logo from '../../Logo/Logo';

const links = [
  { link: '/', title: 'Overview', icon: 'overview' },
  { link: '/courses', title: 'Courses', icon: 'courses' },
  { link: '#', title: 'Members', icon: 'members' },
  { link: '#', title: 'Experts', icon: 'experts' },
  { link: '#', title: 'Settings', icon: 'settings' },
  { link: '#', title: 'Sign out', icon: 'signout' },
];

const SideBar: FC = () => {
  const router = useRouter();

  return (
    <Box as="nav" flex="0 0 240px" backgroundColor="brown.brown">
      <Box marginLeft="44px" marginTop="42px" marginBottom="80px">
        <Logo />
      </Box>

      <List marginLeft="48px">
        {links.map((list, i) => (
          <ListItem
            key={i}
            height="48px"
            opacity={router.pathname === list.link ? '1' : '0.4'}
            transition="opacity .3s"
            _hover={{
              opacity: '1',
            }}
          >
            <Link href={list.link}>
              <a className="nav-link">
                <svg style={{ height: 18, width: 18 }}>
                  <use xlinkHref={`/assets/icons.svg#icon-${list.icon}`} />
                </svg>

                {list.title}
              </a>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default SideBar;
