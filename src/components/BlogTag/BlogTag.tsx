import { FC, useEffect, useState } from 'react';
import AppModal from '../AppModal/AppModal';
import { trpc } from '../../utils/trpc';
import { Box, Button, Flex, Input, Spinner, Text } from '@chakra-ui/react';
import { blogButton } from '../../styles/blog';
import { Tag } from '@prisma/client';

const BlogTag: FC<{
  isOpen: boolean;
  onClose: () => void;
  onClick: (tags?: Tag[]) => void;
  selectedTags?: Tag[];
}> = ({ isOpen, onClick, onClose, selectedTags }) => {
  const [title, setTitle] = useState('');
  const [loading, setIsLoading] = useState(false);
  const [stdTags, setselectedTags] = useState(selectedTags);
  const { data, isLoading } = trpc.blog.getAllTags.useQuery();
  const [tags, setTags] = useState<Tag[]>();

  useEffect(() => {
    setselectedTags(selectedTags);
  }, [selectedTags]);

  useEffect(() => {
    if (!isLoading) {
      const ids = selectedTags?.map((cur) => cur.id);
      const allt = data?.filter((cur) => !ids?.includes(cur.id));
      setTags(allt);
    }
  }, [isLoading, data, selectedTags]);

  const createTag = trpc.blog.createTag.useMutation({
    onSuccess(res) {
      setIsLoading(false);
      if (tags) setTags([res, ...tags]);
      else setTags([res]);
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
      onClick={() => onClick(stdTags)}
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

      {stdTags && (
        <Box mb='20px'>
          <Text mb='10px'>Selected Tags</Text>
          <Flex gap='10px' wrap='wrap'>
            {stdTags.map((tag) => (
              <Button
                {...blogButton}
                key={tag.id}
                onClick={() => {
                  if (tags) setTags([tag, ...tags]);
                  else setTags([tag]);

                  const allt = stdTags.filter((cur) => cur.id !== tag.id);
                  setselectedTags(allt);
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
        <Flex gap='10px' wrap='wrap' h='200px' overflowY={'auto'}>
          {tags?.map((tag) => (
            <Button
              {...blogButton}
              key={tag.id}
              onClick={() => {
                if (stdTags) {
                  setselectedTags([...stdTags, tag]);
                } else setselectedTags([tag]);

                const allt = tags.filter((cur) => cur.id !== tag.id);
                setTags(allt);
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
