import { FC } from 'react';
import CardSection from '../CardSection/CardSection';
import { Executive } from '../../../types/types';

const SRC: FC<{ src: Executive[] }> = ({ src }) => {
  return (
    <CardSection
      heading='Student Representative council'
      description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et.'
      cards={src}
    />
  );
};

export default SRC;
