import { FC } from 'react';
import { ExcoType } from '@prisma/client';
import { trpc } from '../../../utils/trpc';
import CardSection from '../CardSection/CardSection';

const CISSA: FC = () => {
  const cissa = trpc.exco.getExcos.useQuery({ type: ExcoType.CISSA });

  return (
    <CardSection
      heading="Cissa Executives"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et."
      cards={cissa?.data}
    />
  );
};

export default CISSA;
