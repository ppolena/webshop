import { Component, OnInit } from '@angular/core';

export interface Section {
  imgUrl: string;
  title: string;
  details: string;
  price: string;
}

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  cards: Section[] = [
    {
      imgUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      title: 'Title 1',
      details: 'Bla Bla',
      price: '1 500FT',
    },
    {
      imgUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      title: 'Title 2',
      details: 'Bla Bla',
      price: '2 500FT',
    },
    {
      imgUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      title: 'Title 3',
      details: 'Bla Bla',
      price: '3 500FT',
    },
    {
      imgUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      title: 'Title 4',
      details: 'Bla Bla',
      price: '4 500FT',
    },
  ];
}
