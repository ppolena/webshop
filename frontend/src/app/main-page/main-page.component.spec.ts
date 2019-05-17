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
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('MainPageComponent', () => {
  let component: MainPageComponent;
  let fixture: ComponentFixture<MainPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MainPageComponent,
        MainCarouselComponent,
        FavouriteCardsComponent,
        SearchBarComponent,
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
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
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
