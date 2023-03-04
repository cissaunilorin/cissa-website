import { FC } from 'react';
import { ExcoType } from '@prisma/client';
import { trpc } from '../../../utils/trpc';
import CardSection from '../CardSection/CardSection';

const StudentBody: FC = () => {
  const studentBody = trpc.exco.getExcos.useQuery({ type: ExcoType.CISSA });

  return (
    <CardSection
      heading="Student Body"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et."
      cards={studentBody?.data}
    />
  );
};

export default StudentBody;
