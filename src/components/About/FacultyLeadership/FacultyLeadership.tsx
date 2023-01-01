import { FC } from 'react';
import CardSection from '../CardSection/CardSection';

const facultyLeaders = [
  {
    name: 'Queen Hearts',
    title: 'H.O.D Information and Communication Science',
    imageSrc: '/assets/woman.png',
  },
  {
    name: 'Adebayo Fawaz',
    title: 'Faculty Dean',
    imageSrc: '/assets/man.png',
  },
  {
    name: 'Queen MyLove',
    title: 'Faculty Sub Dean',
    imageSrc: '/assets/oldman.png',
  },
  {
    name: 'Queen Queen',
    title: 'Faculty Dean',
    imageSrc: '/assets/woman.png',
  },
];

const FacultyLeadership: FC = () => {
  return (
    <CardSection
      heading="Faculty Leadership"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et."
      cards={facultyLeaders}
    />
  );
};

export default FacultyLeadership;
