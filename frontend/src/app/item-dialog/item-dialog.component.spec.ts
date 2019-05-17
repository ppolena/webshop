import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';

import { MatDialogModule } from '@angular/material';

import { ItemDialogComponent } from './item-dialog.component';

describe('ItemDialogComponent', () => {
  let component: ItemDialogComponent;
  let fixture: ComponentFixture<ItemDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ItemDialogComponent],
      imports: [RouterModule, MatDialogModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
