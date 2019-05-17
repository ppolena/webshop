import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';

import { MainCarouselComponent } from './main-carousel.component';

import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HAMMER_LOADER } from '@angular/platform-browser';

describe('MainCarouselComponent', () => {
  let component: MainCarouselComponent;
  let fixture: ComponentFixture<MainCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MainCarouselComponent],
      imports: [CarouselModule.forRoot(), RouterModule],
      providers: [
        {
          provide: HAMMER_LOADER,
          useValue: () => new Promise(() => {}),
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
