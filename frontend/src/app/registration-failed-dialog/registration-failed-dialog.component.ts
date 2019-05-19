import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-registration-failed-dialog',
  templateUrl: './registration-failed-dialog.component.html',
  styleUrls: ['./registration-failed-dialog.component.css']
})
export class RegistrationFailedDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<RegistrationFailedDialogComponent>) { }

  ngOnInit() {
    setTimeout(() => {
      this.dialogRef.close();
    }, 3000);
  }
}
