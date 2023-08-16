import { FC } from 'react';
import { trpc } from '../../../utils/trpc';
import CardSection from '../CardSection/CardSection';
import { Executive } from '../../../types/types';

const FacultyLeadership: FC<{ staff: Executive[] }> = ({ staff }) => {
  return (
    <CardSection
      heading='Faculty Leadership'
      description='meet the faculty Leaders'
      cards={staff}
    />
  );
};

export default FacultyLeadership;
