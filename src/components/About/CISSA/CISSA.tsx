import { FC } from 'react';
import { Executive, User } from '@prisma/client';
import CardSection from '../CardSection/CardSection';

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
