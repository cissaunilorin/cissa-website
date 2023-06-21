import { FC } from 'react';
import { ExcoType } from '@prisma/client';
import { trpc } from '../../../utils/trpc';
import CardSection from '../CardSection/CardSection';

const SRC: FC = () => {
  const src = trpc.exco.getExcos.useQuery({ type: ExcoType.SRC });

  return (
    <CardSection
      heading="Student Representative council"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et."
      cards={src?.data}
    />
  );
};

export default SRC;
