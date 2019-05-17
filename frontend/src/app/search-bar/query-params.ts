export class QueryParams {
  searchText: string;
  type: string;
  lower: number;
  upper: number;
  sort: string;

  constructor(
    searchText: string,
    type: string,
    lower: number,
    upper: number,
    sort: string
  ) {
    this.searchText = searchText;
    this.type = type;
    this.lower = lower;
    this.upper = upper;
    this.sort = sort;
  }
}
