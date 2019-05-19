import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatListModule,
  MatFormFieldModule,
  MatTableModule,
  MatMenuModule,
  MatSliderModule,
  MatPaginatorModule,
  MatGridListModule,
  MatSelectModule,
  MatInputModule,
  MatRadioModule,
  MAT_DIALOG_DATA,
} from '@angular/material';

import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';

import { ShoppingFormComponent } from './shopping-form.component';

describe('ShoppingFormComponent', () => {
  let component: ShoppingFormComponent;
  let fixture: ComponentFixture<ShoppingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShoppingFormComponent],
      imports: [
        RouterModule,
        MatIconModule,
        MatInputModule,
        MatRadioModule,
        BrowserAnimationsModule,
        NoopAnimationsModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
