import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationFailedDialogComponent } from './registration-failed-dialog.component';
import { MatDialogModule, MatDialogRef } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('RegistrationFailedDialogComponent', () => {
  let component: RegistrationFailedDialogComponent;
  let fixture: ComponentFixture<RegistrationFailedDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationFailedDialogComponent ],
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
    fixture = TestBed.createComponent(RegistrationFailedDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
