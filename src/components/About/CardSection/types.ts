import { Executive, User } from '../../../../prisma/generated/prisma-client-js';

export interface ICardSection {
  heading: string;
  description: string;
  cards?: (Executive & {
    user: User;
  })[];
}
