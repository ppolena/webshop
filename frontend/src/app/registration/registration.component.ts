import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  Validators,
} from '@angular/forms';
import { User } from '../user';
import { ApiService } from '../api.service';
import { MatDialog, MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { RegistrationFailedDialogComponent } from '../registration-failed-dialog/registration-failed-dialog.component';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {

  firstName: FormControl = new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(50)]);
  lastName: FormControl = new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(50)]);
  password: FormControl = new FormControl('', [Validators.required, Validators.minLength(8)]);
  email: FormControl = new FormControl('', [Validators.required, Validators.email]);
  phone: FormControl = new FormControl('');
  postalCode: FormControl = new FormControl('');
  city: FormControl = new FormControl('');
  address: FormControl = new FormControl('');

  constructor(private apiService: ApiService, 
    private router: Router,
    private dialog: MatDialog,
    private snackBar: MatSnackBar) {
  }

  ngOnInit() {}

  register(){
    let user = new User(
      this.firstName.value, 
      this.lastName.value, 
      this.password.value, 
      this.email.value, 
      this.phone.value === '' ? null : this.phone.value, 
      this.postalCode.value === '' ? null : this.postalCode.value,
      this.city.value === '' ? null : this.city.value,
      this.address.value === ''? null : this.address.value)

    this.apiService.post('/users', user).subscribe(() => {
      console.log('Registration successful!');
      this.snackBar.open('Registration successful!', 'Close', {
        duration: 5000,
        panelClass: 'snackbar'
      });
      this.router.navigate(['/login']);
    }, () => {
      console.log('Registration failed!');
      this.firstName.reset();
      this.lastName.reset();
      this.password.reset();
      this.email.reset();
      this.phone.reset();
      this.postalCode.reset();
      this.city.reset();
      this.address.reset();
      this.dialog.open(RegistrationFailedDialogComponent);
    });
  }
}
