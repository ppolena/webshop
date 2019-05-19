import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  Validators,
} from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { MatDialog, MatSnackBar } from '@angular/material';
import { HttpHeaders } from '@angular/common/http';
import { LoginFailedDialogComponent } from '../login-failed-dialog/login-failed-dialog.component';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  email: FormControl = new FormControl('', [Validators.required, Validators.email]);
  password: FormControl = new FormControl('', [Validators.required, Validators.minLength(8)]);

  constructor(private loginService: LoginService, 
    private router: Router,
    private dialog: MatDialog,
    private snackBar: MatSnackBar) {
  }

  ngOnInit() {}

  login(){
    const headers = new HttpHeaders(
      {
        authorization: 'Basic ' + btoa(
          unescape(encodeURIComponent(this.email.value))
          + ':'
          + unescape(encodeURIComponent(this.password.value)))
      });
      if(this.loginService.login(headers)) {
        console.log('Login successful!');
        this.snackBar.open('Login successful!', 'Close', {
          duration: 5000,
          panelClass: 'snackbar'
        });
        this.router.navigate(['']);
      } else {
        console.log('Login failed!');
        this.email.reset();
        this.password.reset();
        this.dialog.open(LoginFailedDialogComponent);
      }
  }
}
