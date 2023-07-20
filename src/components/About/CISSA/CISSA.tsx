import { FC } from 'react';

import CardSection from '../CardSection/CardSection';
import { Executive, User } from '../../../../prisma/generated/prisma-client-js';

const CISSA: FC<{
  cissa: (Executive & {
    user: User;
  })[];
}> = ({ cissa }) => {
  return (
    <CardSection
      heading='Cissa Executives'
      description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et.'
      cards={cissa}
    />
  );
};

export default CISSA;
