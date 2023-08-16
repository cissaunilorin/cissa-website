import { FC } from 'react';
import CardSection from '../CardSection/CardSection';
import { Executive } from '../../../types/types';

const SRC: FC<{ src: Executive[] }> = ({ src }) => {
  return (
    <CardSection
      heading='Student Representative council'
      description='meet the SRC members'
      cards={src}
    />
  );
};

export default SRC;
