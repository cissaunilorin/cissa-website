export interface ICardSection {
  heading: string;
  description: string;
  cards: {
    user: { name: string };
    name: string;
    title: string;
    imageSrc: string;
    position: string
  }[] | undefined | any;
}
