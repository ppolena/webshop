import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule }  from '@angular/common';

import { LoginComponent } from './login.component';
import { MatDialogModule, MatFormFieldModule, MatInputModule, MatSnackBarModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginFailedDialogComponent } from '../login-failed-dialog/login-failed-dialog.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent, LoginFailedDialogComponent],
      imports: [ 
        FormsModule, 
        ReactiveFormsModule, 
        CommonModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatSnackBarModule,
        RouterTestingModule,
        HttpClientTestingModule,
        BrowserAnimationsModule,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
