import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material';

export interface Section {
  imgUrl: string;
  title: string;
  details: string;
  price: string;
}

const ELEMENT_DATA: Section[] = [
  {
    imgUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    title: 'Title 1',
    details: 'Bla Bla Bla Bla',
    price: '1 500FT',
  },
  {
    imgUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    title: 'Title 2',
    details: 'Bla Bla Bla Bla',
    price: '1 900Ft',
  },
  {
    imgUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    title: 'Title 3',
    details: 'Bla Bla Bla Bla',
    price: '2 500Ft',
  },
  {
    imgUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    title: 'Title 1',
    details: 'Bla Bla Bla Bla',
    price: '1 500FT',
  },
  {
    imgUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    title: 'Title 2',
    details: 'Bla Bla Bla Bla',
    price: '1 900Ft',
  },
  {
    imgUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    title: 'Title 3',
    details: 'Bla Bla Bla Bla',
    price: '2 500Ft',
  },
  {
    imgUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    title: 'Title 1',
    details: 'Bla Bla Bla Bla',
    price: '1 500FT',
  },
  {
    imgUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    title: 'Title 2',
    details: 'Bla Bla Bla Bla',
    price: '1 900Ft',
  },
  {
    imgUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
    title: 'Title 3',
    details: 'Bla Bla Bla Bla',
    price: '2 500Ft',
  },
];

@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css'],
})
export class ElectronicsComponent implements OnInit {
  displayedColumns: string[] = ['title', 'details', 'prices'];
  dataSource = new MatCardModule(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor() {}

  ngOnInit() {}
}
