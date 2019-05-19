export default class Merchandise {
  name: string;
  type: string;
  manufacturer: string;
  price: number;
  image: string;
  thumbnail: string;
  description: string;

  _links: {
    self:{
        href: string;
    }
  }
}
