import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';

import { MatFormFieldModule, MatTableModule } from '@angular/material';

import { ElectronicsComponent } from './electronics.component';

describe('ElectronicsComponent', () => {
  let component: ElectronicsComponent;
  let fixture: ComponentFixture<ElectronicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ElectronicsComponent],
      imports: [RouterModule, MatFormFieldModule, MatTableModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectronicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
