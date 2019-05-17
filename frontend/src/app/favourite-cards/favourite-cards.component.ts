import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatDialogRef, MatDialog } from '@angular/material';

export interface Section {
  imgUrl: string;
  title: string;
  details: string;
  price: string;
}

@Component({
  selector: 'app-favourite-cards',
  templateUrl: './favourite-cards.component.html',
  styleUrls: ['./favourite-cards.component.css'],
})
export class FavouriteCardsComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  cards: Section[] = [
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

  openDialog() {
    const dialogRef = this.dialog.open(CardsDialog);
  }

  ngOnInit() {}
}

@Component({
  selector: 'cards-dialog',
  templateUrl: 'cards-dialog.html',
})
export class CardsDialog {
  constructor(public dialogRef: MatDialogRef<CardsDialog>) {}

  onCartClick(): void {
    this.dialogRef.close(true);
  }
}
