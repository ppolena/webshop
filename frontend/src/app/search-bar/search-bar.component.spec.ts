import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {
  MatFormFieldModule,
  MatSliderModule,
  MatIconModule,
  MatSelectModule,
  MatInputModule,
} from '@angular/material';

import { SearchBarComponent } from './search-bar.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchBarComponent],
      imports: [
        MatFormFieldModule,
        MatSliderModule,
        MatIconModule,
        MatSelectModule,
        MatInputModule,
        ReactiveFormsModule,
        FormsModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
