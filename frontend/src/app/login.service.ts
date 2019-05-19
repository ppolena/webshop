import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { BehaviorSubject } from 'rxjs';
import { User } from './user';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public user: BehaviorSubject<User> = new BehaviorSubject(undefined);

  constructor(private apiService: ApiService) { }

  public login(headers: HttpHeaders){
    return this.apiService.login(headers).subscribe(()=>{
      return this.apiService.getAuthenticatedUser().subscribe((user: User) => {
        this.user.next(user);
        return true;
      }, error => {
        console.log(error);
        return false;
      });
    }, () => {
      return false;
    });
  }

  public authenticate(){
    this.apiService.authenticate().subscribe(()=> {
      console.log('AUTHENTICATED');
      this.apiService.getAuthenticatedUser().subscribe((user: User) => {
        this.user.next(user);
      }, error => {
        console.log(error);
      });
    }, () => {
      console.log('UNAUTHENTICATED');
    });
  }

  public logout(){
    return this.apiService.logout().subscribe(()=> {
      console.log('Logout successful!');
      this.user.next(undefined);
      return true;
    }, error => {
      console.log('Logout failed!');
      console.log(error);
      return false;
    });

  }
}
