import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';

import { MainPageComponent } from './main-page.component';
import { MainCarouselComponent } from '../main-carousel/main-carousel.component';
import { FavouriteCardsComponent } from '../favourite-cards/favourite-cards.component';

import { CarouselModule } from 'ngx-bootstrap/carousel';

import {
  MatCardModule,
  MatIconModule,
  MatListModule,
  MatGridListModule,
  MatPaginatorModule,
  MatFormFieldModule,
  MatSliderModule,
  MatSelectModule,
  MatInputModule,
} from '@angular/material';

describe('MainPageComponent', () => {
  let component: MainPageComponent;
  let fixture: ComponentFixture<MainPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MainPageComponent,
        MainCarouselComponent,
        FavouriteCardsComponent,
      ],
      imports: [
        CarouselModule.forRoot(),
        RouterModule,
        MatCardModule,
        MatIconModule,
        MatListModule,
        MatCardModule,
        MatIconModule,
        MatGridListModule,
        MatPaginatorModule,
        MatFormFieldModule,
        MatSliderModule,
        MatSelectModule,
        MatInputModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
