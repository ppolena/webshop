import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FavouriteCardsComponent } from './favourite-cards.component';
import {
  MatCardModule,
  MatIconModule,
  MatGridListModule,
  MatPaginatorModule,
} from '@angular/material';
import { SearchBarComponent } from '../search-bar/search-bar.component';

describe('FavouriteCardsComponent', () => {
  let component: FavouriteCardsComponent;
  let fixture: ComponentFixture<FavouriteCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FavouriteCardsComponent, SearchBarComponent],
      imports: [
        MatCardModule,
        MatIconModule,
        MatGridListModule,
        MatPaginatorModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouriteCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
