import { FC } from 'react';
import { Executive, User } from '@prisma/client';
import CardSection from '../CardSection/CardSection';

const SRC: FC<{
  src: (Executive & {
    user: User;
  })[];
}> = ({ src }) => {
  return (
    <CardSection
      heading='Student Representative council'
      description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et.'
      cards={src}
    />
  );
};

export default SRC;
