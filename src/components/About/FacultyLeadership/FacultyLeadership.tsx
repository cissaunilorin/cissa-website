import { ExcoType } from '@prisma/client';
import { FC } from 'react';
import { trpc } from '../../../utils/trpc';
import CardSection from '../CardSection/CardSection';

const FacultyLeadership: FC = () => {
  const facultyLeader = trpc.exco.getExcos.useQuery({ type: ExcoType.STAFF });

  return (
    <CardSection
      heading='Faculty Leadership'
      description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et.'
      cards={facultyLeader.data}
    />
  );
};

export default FacultyLeadership;
