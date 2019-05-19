import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { MAT_DIALOG_DATA } from '@angular/material';

import { QueryParams } from '../search-bar/query-params';
import { ApiService } from '../api.service';
import { MerchandiseList } from '../merchandise-list';
import Merchandise from '../merchandise';
import { PageEvent } from '@angular/material';
import { User } from '../user';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-favourite-cards',
  templateUrl: './favourite-cards.component.html',
  styleUrls: ['./favourite-cards.component.css'],
})
export class FavouriteCardsComponent implements OnInit {
  user: User;
  queryParams: QueryParams;
  merchandiseList: Array<Merchandise>;
  page: number = 0;
  size: number = 12;
  totalElements: number;

  constructor(public dialog: MatDialog, private apiService: ApiService, private loginService: LoginService, private snackBar: MatSnackBar) {
    this.loginService.user.subscribe((user: User) => {
      this.user = user;
    })
  }

  openDialog(merchandise: Merchandise) {
    const dialogRef = this.dialog.open(CardsDialog, { data: merchandise });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

  ngOnInit() {
    this.queryParams = new QueryParams('', 'ALL', 0, 100000, 'price,asc');
    this.loadMerchandise();
  }

  addToCart(merchandise: Merchandise){
    this.apiService.post('/cart-items', {merchandise: merchandise._links.self.href, user: this.user._links.self.href, amount: 1}).subscribe(() => {
      console.log('Added to cart');
      this.snackBar.open('Merchandise added to cart!', 'Close', {
        duration: 5000,
        panelClass: 'snackbar'
      });
    })
  }

  setQueryParams(queryParams: QueryParams) {
    this.queryParams = queryParams;
    this.loadMerchandise();
  }

  public showNewPage(pageEvent: PageEvent) {
    this.page = pageEvent.pageIndex;
    this.size = pageEvent.pageSize;
    this.loadMerchandise();
  }

  loadMerchandise() {
    let url = '';
    if (this.queryParams.type === 'ALL') {
      url =
        '/merchandise/search/by-search-text-and-price-between?' +
        'search-text=' +
        this.queryParams.searchText +
        '&' +
        'lower=' +
        this.queryParams.lower +
        '&' +
        'upper=' +
        this.queryParams.upper +
        '&';
    } else {
      url =
        '/merchandise/search/by-search-text-and-type-and-price-between?' +
        'search-text=' +
        this.queryParams.searchText +
        '&' +
        'type=' +
        this.queryParams.type +
        '&' +
        'lower=' +
        this.queryParams.lower +
        '&' +
        'upper=' +
        this.queryParams.upper +
        '&';
    }

    this.apiService
      .getAll(url, this.page, this.size, this.queryParams.sort)
      .subscribe((merchandiseList: MerchandiseList) => {
        if (merchandiseList._embedded) {
          this.merchandiseList = merchandiseList._embedded.merchandise;
        } else {
          this.merchandiseList = [];
        }
        this.totalElements = merchandiseList.page.totalElements;
      });
  }
}

@Component({
  selector: 'cards-dialog',
  templateUrl: 'cards-dialog.html',
})
export class CardsDialog {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Merchandise,
    private apiService: ApiService
  ) {}

  ngOnInit() {}
}
