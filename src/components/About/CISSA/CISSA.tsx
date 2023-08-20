import { FC } from 'react';
import CardSection from '../CardSection/CardSection';
import { Executive } from '../../../types/types';

const CISSA: FC<{ cissa: Executive[] }> = ({ cissa }) => {
  return (
    <CardSection
      heading='CISSA Executives'
      description='meet your CEC members'
      cards={cissa}
    />
  );
};

export default CISSA;
