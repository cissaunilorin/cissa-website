import { FC } from 'react';
import { trpc } from '../../../utils/trpc';
import CardSection from '../CardSection/CardSection';
import { Executive } from '../../../types/types';

const FacultyLeadership: FC<{ staff: Executive[] }> = ({ staff }) => {
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
