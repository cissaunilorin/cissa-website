export interface ICardSection {
  heading: string;
  description: string;
  cards: {
    name: string;
    title: string;
    imageSrc: string;
  }[];
}
