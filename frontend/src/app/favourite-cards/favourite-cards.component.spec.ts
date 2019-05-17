import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FavouriteCardsComponent } from './favourite-cards.component';
import {
  MatCardModule,
  MatIconModule,
  MatGridListModule,
  MatPaginatorModule,
  MatFormFieldModule,
  MatSliderModule,
  MatSelectModule,
  MatInputModule,
} from '@angular/material';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { ApiServiceService } from '../api-service.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

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
        MatFormFieldModule,
        MatSliderModule,
        MatSelectModule,
        MatInputModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientTestingModule,
        BrowserAnimationsModule,
        NoopAnimationsModule,
      ],
      providers: [ApiServiceService],
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
