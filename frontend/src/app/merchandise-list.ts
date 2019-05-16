import Merchandise from './merchandise';

export class MerchandiseList {
  _embedded: {
    merchandise: Array<Merchandise>;
  };
  _links: {
    self: {
      href: string;
    };
  };
  page: {
    size: number;
    totalElements: number;
    totalPages: number;
    number: number;
  };
  Chat;
  Conversation;
  End;
  Type;
  a;
  message;
}
