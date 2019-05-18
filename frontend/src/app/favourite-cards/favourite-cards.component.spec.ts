import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';

import { FavouriteCardsComponent } from './favourite-cards.component';
import { ItemDialogComponent } from '../item-dialog/item-dialog.component';

import {
  MatCardModule,
  MatIconModule,
  MatListModule,
  MatDialogModule,
  MatDialogRef,
  MatDialog,
} from '@angular/material';

describe('FavouriteCardsComponent', () => {
  let component: FavouriteCardsComponent;
  let fixture: ComponentFixture<FavouriteCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FavouriteCardsComponent, ItemDialogComponent],
      imports: [
        MatCardModule,
        MatIconModule,
        MatListModule,
        RouterModule,
        MatDialogModule,
        MatDialogRef,
        MatDialog,
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
