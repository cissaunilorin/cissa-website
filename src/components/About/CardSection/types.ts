import { Executive, User } from '@prisma/client';

export interface ICardSection {
  heading: string;
  description: string;
  cards?: (Executive & {
    user: User;
  })[];
}
