import { FC } from 'react';
import { ExcoType } from '@prisma/client';
import { trpc } from '../../../utils/trpc';
import CardSection from '../CardSection/CardSection';

const studentBody = [
  {
    name: 'Olamilekan  Sodiq',
    title: 'Faculty President',
    imageSrc: '/assets/man.png',
  },
  {
    name: 'Olamilekan Tesleemah',
    title: 'Faculty Vice President',
    imageSrc: '/assets/man.png',
  },
  {
    name: 'Elijah Oyindamola',
    title: 'General Secretary',
    imageSrc: '/assets/man.png',
  },
  {
    name: 'Adeleye Abigail',
    title: 'Welfare Secretary',
    imageSrc: '/assets/man.png',
  },
  {
    name: 'Adeleye Abigail',
    title: 'Secretary',
    imageSrc: '/assets/man.png',
  },
];

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
