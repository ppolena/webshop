import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { User } from './user';
import { LoginService } from './login.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'frontend';
  lat: number = 47.500359;
  lng: number = 19.023769;
  user: User;

  constructor(private loginService: LoginService, private snackBar: MatSnackBar){
    this.loginService.user.subscribe((user: User) => {
      this.user = user;
    });
    this.loginService.authenticate();
  }

  logout(){
    if(this.loginService.logout()){
      this.snackBar.open('Logout successful!', 'Close', {
        duration: 5000,
        panelClass: 'snackbar'
      });
    } else {
      this.snackBar.open('Logout failed!', 'Close', {
        duration: 5000,
        panelClass: 'snackbar'
      });
    }
  }
}
