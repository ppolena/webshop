import { Component, OnInit } from '@angular/core';

export interface Section {
  imgUrl: string,
  title: string,
  details: string,
  price: string
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})

export class MainPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
/*
  cards: Section[] = [
    {
      imgUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      title: 'Title 1',
      details: 'Bla Bla Bla Bla',
      price: '1 500FT'
    },
    {
      imgUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      title: 'Title 2',
      details: 'Bla Bla Bla Bla',
      price: '1 900Ft'
    },
    {
      imgUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      title: 'Title 3',
      details: 'Bla Bla Bla Bla',
      price: '2 500Ft'
    },
    {
      imgUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      title: 'Title 1',
      details: 'Bla Bla Bla Bla',
      price: '1 500FT'
    },
    {
      imgUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      title: 'Title 2',
      details: 'Bla Bla Bla Bla',
      price: '1 900Ft'
    },
    {
      imgUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      title: 'Title 3',
      details: 'Bla Bla Bla Bla',
      price: '2 500Ft'
    },
    {
      imgUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      title: 'Title 1',
      details: 'Bla Bla Bla Bla',
      price: '1 500FT'
    },
    {
      imgUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      title: 'Title 2',
      details: 'Bla Bla Bla Bla',
      price: '1 900Ft'
    },
    {
      imgUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      title: 'Title 3',
      details: 'Bla Bla Bla Bla',
      price: '2 500Ft'
    }
  ];*/

  

}
