import {
  Box,
  Button,
  Flex,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react';
import { FC } from 'react';
import ChakraNextImage from '../../chakra-nextimage';
import moment from 'moment';
import { EditIcon } from '@chakra-ui/icons';
// import { router } from '../../../server/trpc';
import { useRouter } from 'next/router';
import { Blog } from '../../../types/types';

const AuthorBlog: FC<{ blogs: Blog[] }> = ({ blogs }) => {
  const router = useRouter();
  return (
    <Box
      flex={3}
      mt={{ md: '200px' }}
      mb='100px'
      order={{ base: 1, md: 'unset' }}>
      <Tabs>
        <TabList borderColor='#eee'>
          <Tab _selected={{ color: 'brown.deep', borderColor: 'currentColor' }}>
            published
          </Tab>
          <Tab _selected={{ color: 'brown.deep', borderColor: 'currentColor' }}>
            unpublished
          </Tab>
          <Tab _selected={{ color: 'brown.deep', borderColor: 'currentColor' }}>
            Draft
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            {blogs
              .filter((cur) => cur.published)
              .map((cur) => (
                <Flex key={cur.id} gap='20px' align='center' mb='20px'>
                  <ChakraNextImage
                    src={cur.imageUrl}
                    w='120px'
                    css={{ aspectRatio: '1/1' }}
                  />

                  <Box>
                    <Heading mb='10px' fontSize={'xl'}>
                      {cur.heading}
                    </Heading>
                    <Text mb='10px'>
                      {moment(cur.createdAt).format('MMMM Do, YYYY')}
                    </Text>
                    <Button
                      leftIcon={<EditIcon />}
                      onClick={() => router.push(`/write/${cur.id}`)}
                      variant={'outline'}>
                      Edit
                    </Button>
                  </Box>
                </Flex>
              ))}
          </TabPanel>

          <TabPanel>
            {blogs
              .filter((cur) => !cur.published)
              .map((cur) => (
                <Flex key={cur.id} gap='20px' align='center' mb='20px'>
                  <ChakraNextImage
                    src={cur.imageUrl}
                    w='120px'
                    css={{ aspectRatio: '1/1' }}
                  />

                  <Box>
                    <Heading mb='10px' fontSize={'xl'}>
                      {cur.heading}
                    </Heading>
                    <Text mb='10px'>
                      {moment(cur.createdAt).format('MMMM Do, YYYY')}
                    </Text>
                    <Button
                      leftIcon={<EditIcon />}
                      onClick={() => router.push(`/write/${cur.id}`)}
                      variant={'outline'}>
                      Edit
                    </Button>
                  </Box>
                </Flex>
              ))}
          </TabPanel>

          <TabPanel>
            {blogs
              .filter((cur) => !cur.published && cur.draft)
              .map((cur) => (
                <Flex key={cur.id} gap='20px' align='center' mb='20px'>
                  <ChakraNextImage
                    src={cur.imageUrl}
                    w='120px'
                    css={{ aspectRatio: '1/1' }}
                  />

                  <Box>
                    <Heading mb='10px' fontSize={'xl'}>
                      {cur.heading}
                    </Heading>
                    <Text mb='10px'>
                      {moment(cur.createdAt).format('MMMM Do, YYYY')}
                    </Text>
                    <Button
                      leftIcon={<EditIcon />}
                      onClick={() => router.push(`/write/${cur.id}`)}
                      variant={'outline'}>
                      Edit
                    </Button>
                  </Box>
                </Flex>
              ))}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default AuthorBlog;
