import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { QueryParams } from './query-params';

export interface MerchandiseType {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  public searchText: FormControl = new FormControl('');
  types: MerchandiseType[] = [
    { value: 'ALL', viewValue: 'All' },
    { value: 'SOFTWARE', viewValue: 'Software' },
    { value: 'ELECTRONICS', viewValue: 'Electronics' },
    { value: 'HOME', viewValue: 'Home' },
    { value: 'HEALTH', viewValue: 'Health' },
    { value: 'FASHION', viewValue: 'Fashion' },
    { value: 'SPORT', viewValue: 'Sport' },
  ];
  selectedType: string = 'ALL';
  lower: number = 0;
  upper: number = 10000;
  sortDirection: string = 'asc';
  @Output() queryParams: EventEmitter<QueryParams> = new EventEmitter<
    QueryParams
  >();

  constructor() {}

  ngOnInit() {}

  formatLabel(value: number | null) {
    if (!value) {
      return 0;
    }

    if (value >= 1000) {
      return Math.round(value / 100) / 10 + 'k';
    }

    return value;
  }

  changeSortDirection() {
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    this.search();
  }

  search() {
    let queryParams = new QueryParams(
      this.searchText.value,
      this.selectedType,
      this.lower,
      this.upper,
      'price,' + this.sortDirection
    );
    this.queryParams.emit(queryParams);
  }
}
