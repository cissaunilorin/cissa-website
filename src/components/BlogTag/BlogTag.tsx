import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import AppModal from '../AppModal/AppModal';
import { trpc } from '../../utils/trpc';
import { Box, Button, Flex, Input, Spinner, Text } from '@chakra-ui/react';
import { blogButton } from '../../styles/blog';
import { Tag } from '../../types/types';

const BlogTag: FC<{
  isOpen: boolean;
  isLoading: boolean;
  onClose: () => void;
  // onClick: (tags?: Tag[]) => void;
  selectedTags?: Tag[];
  setSelectedTags: Dispatch<SetStateAction<Tag[] | undefined>>;
  setAllTags: Dispatch<SetStateAction<Tag[] | undefined>>;
  allTags?: Tag[];
}> = ({
  isOpen,
  // onClick,
  onClose,
  selectedTags,
  isLoading,
  allTags,
  setSelectedTags,
  setAllTags,
}) => {
  const [title, setTitle] = useState('');
  const [loading, setIsLoading] = useState(false);
  // const [stdTags, setselectedTags] = useState(selectedTags);
  // const { data, isLoading } = trpc.blog.getAllTags.useQuery();
  // const [tags, setTags] = useState<Tag[]>();

  // useEffect(() => {
  //   setselectedTags(selectedTags);
  // }, [selectedTags]);

  // useEffect(() => {
  //   if (!isLoading) {
  //     const ids = selectedTags?.map((cur) => cur.id);
  //     const allt = data?.filter((cur) => !ids?.includes(cur.id));
  //     setTags(allt);
  //   }
  // }, [isLoading, data, selectedTags]);

  const createTag = trpc.blog.createTag.useMutation({
    onSuccess(res) {
      setIsLoading(false);
      if (allTags) setAllTags([res, ...allTags]);
      else setAllTags([res]);
    },
    onError() {
      setIsLoading(false);
    },
  });

  return (
    <AppModal
      heading='Tags'
      isOpen={isOpen}
      isSubmitting={false}
      // onClick={() => onClick(stdTags)}
      onClick={onClose}
      onClose={onClose}
      closeOnOverlayClick={false}>
      <Flex gap='20px' mb='20px'>
        <Input value={title} onChange={(e) => setTitle(e.target.value)} />
        <Button
          isLoading={loading}
          onClick={() => {
            if (title) {
              setIsLoading(true);
              createTag.mutate({ title });
            }
          }}>
          Add Tag
        </Button>
      </Flex>

      {selectedTags && (
        <Box mb='20px'>
          <Text mb='10px'>Selected Tags</Text>
          <Flex gap='10px' wrap='wrap'>
            {selectedTags.map((tag) => (
              <Button
                {...blogButton}
                key={tag.id}
                onClick={() => {
                  // if (allTags) setTags([tag, ...tags]);
                  // else setTags([tag]);

                  const allt = selectedTags.filter((cur) => cur.id !== tag.id);
                  setSelectedTags(allt);
                }}>
                {tag.title}
              </Button>
            ))}
          </Flex>
        </Box>
      )}

      <Text mb='10px'>All Tags</Text>
      {isLoading ? (
        <Spinner />
      ) : (
        <Flex gap='10px' wrap='wrap' maxH='200px' overflowY={'auto'}>
          {/* {tags?.map((tag) => (
            <Button
              {...blogButton}
              marginRight='0'
              key={tag.id}
              onClick={() => {
                if (selectedTags) {
                  setSelectedTags([...selectedTags, tag]);
                } else setSelectedTags([tag]);

                const allt = tags.filter((cur) => cur.id !== tag.id);
                setTags(allt);
              }}>
              {tag.title}
            </Button>
          ))} */}

          {allTags?.map((tag) => (
            <Button
              {...blogButton}
              marginRight='0'
              key={tag.id}
              onClick={() => {
                if (selectedTags) {
                  setSelectedTags([...selectedTags, tag]);
                } else setSelectedTags([tag]);
              }}>
              {tag.title}
            </Button>
          ))}
        </Flex>
      )}
    </AppModal>
  );
};

export default BlogTag;
