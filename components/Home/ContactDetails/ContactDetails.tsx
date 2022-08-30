import { Box } from '@chakra-ui/react';
import { FC } from 'react';
import { mainBoxStyle } from '../../../styles/common';

const ContactDetails: FC = () => {
  return (
    <Box as="section">
      <Box {...mainBoxStyle}></Box>
    </Box>
  );
};

export default ContactDetails;
