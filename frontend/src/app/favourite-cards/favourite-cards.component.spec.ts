import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';

import { FavouriteCardsComponent } from './favourite-cards.component';

import { MatCardModule, 
         MatIconModule,
         MatLineModule, 
         MatListModule} from '@angular/material';

describe('FavouriteCardsComponent', () => {
  let component: FavouriteCardsComponent;
  let fixture: ComponentFixture<FavouriteCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavouriteCardsComponent ],
      imports: [ MatCardModule,
                 MatIconModule,
                 MatListModule,
                 RouterModule]
    })
    .compileComponents();
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
