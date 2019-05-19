import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFailedDialogComponent } from './login-failed-dialog.component';
import { MatDialogModule, MatDialogRef } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('LoginFailedDialogComponent', () => {
  let component: LoginFailedDialogComponent;
  let fixture: ComponentFixture<LoginFailedDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginFailedDialogComponent ],
      imports: [
        MatDialogModule,
        BrowserAnimationsModule,
      ],
      providers: [
        {provide: MatDialogRef, useValue: {}}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFailedDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
