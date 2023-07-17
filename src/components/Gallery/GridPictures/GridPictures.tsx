import { Grid, GridItem } from '@chakra-ui/react';
import ChakraNextImage from '../../chakra-nextimage';
import { gridPicProps } from './styles';

const GridPictures = () => {
  return (
    <Grid templateColumns='repeat(4, 1fr)' gap={4}>
      <GridItem colSpan={2}>
        {/* <ChakraNextImage src='/assets/gallery-light-1.png' {...gridPicProps} /> */}
      </GridItem>
    </Grid>
  );
};

export default GridPictures;
