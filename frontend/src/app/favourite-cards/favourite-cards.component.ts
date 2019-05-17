import { Component, OnInit } from '@angular/core';
import { QueryParams } from '../search-bar/query-params';
import { ApiServiceService } from '../api-service.service';
import { MerchandiseList } from '../merchandise-list';
import Merchandise from '../merchandise';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-favourite-cards',
  templateUrl: './favourite-cards.component.html',
  styleUrls: ['./favourite-cards.component.css'],
})
export class FavouriteCardsComponent implements OnInit {
  queryParams: QueryParams;
  merchandiseList: Array<Merchandise>;
  page: number = 0;
  size: number = 12;
  totalElements: number;

  constructor(private apiService: ApiServiceService) {}

  ngOnInit() {
    this.queryParams = new QueryParams('', 'ALL', 0, 100000, 'price,asc');
    this.loadMerchandise();
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
