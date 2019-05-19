import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import Merchandise from '../merchandise';
import { MerchandiseList } from '../merchandise-list';
import { QueryParams } from '../search-bar/query-params';
import { User } from '../user';
import { LoginService } from '../login.service';

export interface Section {
  imgUrl: string;
  title: string;
  details: string;
  price: string;
}

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {

  user: User;
  queryParams: QueryParams;
  merchandiseList: Array<Merchandise>;
  page: number = 0;
  size: number = 12;
  totalElements: number;

  constructor(private apiService: ApiService, private loginService: LoginService) {
    this.loginService.user.subscribe((user: User) => {
      this.user = user;
    });
  }

  ngOnInit() {    
    this.queryParams = new QueryParams('', 'ALL', 0, 100000, 'price,asc');
    if(this.user){
      this.loadCart();
    }
  }

  loadCart(){
    this.apiService
      .getAll('/merchandise/search/by-user-and-cart?uid=' + this.user.id + '&', this.page, this.size, this.queryParams.sort)
      .subscribe((merchandiseList: MerchandiseList) => {
        if (merchandiseList._embedded) {
          this.merchandiseList = merchandiseList._embedded.merchandise;
        } else {
          this.merchandiseList = [];
        }
        this.totalElements = merchandiseList.page.totalElements;
      });
  }

/*   cards: Section[] = [
    {
      imgUrl: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      title: 'Title 1',
      details: 'Bla Bla Bla Bla',
      price: '1 500FT',
    },
  ]; */


}
