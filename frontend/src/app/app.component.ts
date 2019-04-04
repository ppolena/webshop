import { Component } from '@angular/core';

export interface Section {
  imageURL: string;
  title: string;
  details: string;
  price: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  lat: number = 51.678418;
  lng: number = 7.809007;

  card: Section[] = [
    {
      imageURL: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      title: 'Project_1',
      details: 'Photos',
      price: '1 500FT',
    },
    {
      imageURL: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      title: 'Project_2',
      details: 'Photos',
      price: '1 900FT',
    },
    {
      imageURL: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      title: 'Project_3',
      details: 'Photos',
      price: '1 600FT',
    },
  ];
}
