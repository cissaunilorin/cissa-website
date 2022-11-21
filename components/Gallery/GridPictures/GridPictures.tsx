import { Grid, GridItem } from '@chakra-ui/react';
import ChakraNextImage from '../../chakra-nextimage';
import { gridPicProps } from './styles';

const GridPictures = () => {
    const image = '/assets/gallery-1.png';
  return (
    <Grid templateColumns='repeat(4, 1fr)' gap={4}>
      <GridItem colSpan={2}>
        <ChakraNextImage src='/assets/gallery-light-1.png' {...gridPicProps} />
      </GridItem>

      <GridItem colSpan={2}>
        <ChakraNextImage src='/assets/gallery-light-2.png' {...gridPicProps} />
      </GridItem>

      <GridItem colSpan={1}>
        <ChakraNextImage src='/assets/gallery-light-3.png' {...gridPicProps} />
      </GridItem>

      <GridItem colSpan={1}>
        <ChakraNextImage src='/assets/gallery-light-4.png' {...gridPicProps} />
      </GridItem>

      <GridItem colSpan={2}>
        <ChakraNextImage src='/assets/gallery-light-5.png' {...gridPicProps} />
      </GridItem>

      <GridItem colSpan={2}>
        <ChakraNextImage src='/assets/gallery-light-6.png' {...gridPicProps} />
      </GridItem>

      <GridItem colSpan={2}>
        <ChakraNextImage src='/assets/gallery-light-7.png' {...gridPicProps} />
      </GridItem>

      <GridItem colSpan={1}>
        <ChakraNextImage src='/assets/gallery-light-8.png' {...gridPicProps} />
      </GridItem>

      <GridItem colSpan={1}>
        <ChakraNextImage src='/assets/gallery-light-9.png' {...gridPicProps} />
      </GridItem>

      <GridItem colSpan={2}>
        <ChakraNextImage src='/assets/gallery-light-10.png' {...gridPicProps} />
      </GridItem>

      <GridItem colSpan={2}>
        <ChakraNextImage src='/assets/gallery-light-11.png' {...gridPicProps} />
      </GridItem>

      <GridItem colSpan={2}>
        <ChakraNextImage src='/assets/gallery-light-12.png' {...gridPicProps} />
      </GridItem>

      <GridItem colSpan={1}>
        <ChakraNextImage src='/assets/gallery-light-13.png' {...gridPicProps} />
      </GridItem>

      <GridItem colSpan={1}>
        <ChakraNextImage src='/assets/gallery-light-14.png' {...gridPicProps} />
      </GridItem>

      <GridItem colSpan={2}>
        <ChakraNextImage src='/assets/gallery-light-15.png' {...gridPicProps} />
      </GridItem>      
    </Grid>
  );
};

export default GridPictures;
