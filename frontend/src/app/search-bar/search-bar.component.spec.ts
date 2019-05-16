import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';

import {
  MatFormFieldModule,
  MatMenuModule,
  MatSliderModule,
  MatCardModule,
  MatIconModule,
  MatListModule,
} from '@angular/material';

import { SearchBarComponent } from './search-bar.component';
import { FavouriteCardsComponent } from '../favourite-cards/favourite-cards.component';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;
  let fixture: ComponentFixture<SearchBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchBarComponent, FavouriteCardsComponent],
      imports: [
        RouterModule,
        MatFormFieldModule,
        MatMenuModule,
        MatSliderModule,
        MatCardModule,
        MatIconModule,
        MatListModule,
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
