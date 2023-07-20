import { FC } from 'react';
import { trpc } from '../../../utils/trpc';
import CardSection from '../CardSection/CardSection';
import { Executive, User } from '../../../../prisma/generated/prisma-client-js';

const FacultyLeadership: FC<{
  staff: (Executive & {
    user: User;
  })[];
}> = ({ staff }) => {
  return (
    <CardSection
      heading='Faculty Leadership'
      description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et.'
      cards={staff}
    />
  );
};

export default FacultyLeadership;
