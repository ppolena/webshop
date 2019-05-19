import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-login-failed-dialog',
  templateUrl: './login-failed-dialog.component.html',
  styleUrls: ['./login-failed-dialog.component.css']
})
export class LoginFailedDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<LoginFailedDialogComponent>) { }

  ngOnInit() {
    setTimeout(() => {
      this.dialogRef.close();
    }, 3000);
  }
}
