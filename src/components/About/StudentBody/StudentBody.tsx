import { FC } from 'react';
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
  return (
    <CardSection
      heading="Student Body"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et."
      cards={studentBody}
    />
  );
};

export default StudentBody;
