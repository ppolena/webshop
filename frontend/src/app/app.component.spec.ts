import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserModule } from '@angular/platform-browser';

import {
  BrowserAnimationsModule,
} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatListModule,
  MatMenuModule,
  MatGridListModule,
  MatPaginatorModule,
  MatFormFieldModule,
  MatSliderModule,
  MatSelectModule,
  MatInputModule,
  MatSnackBarModule,
} from '@angular/material';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule }  from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatIconModule,
        AgmCoreModule.forRoot({
          apiKey: 'YOUR_KEY',
        }),
        CarouselModule.forRoot(),
        MatCardModule,
        MatListModule,
        RouterModule,
        RouterTestingModule,
        MatMenuModule,
        FormsModule, 
        ReactiveFormsModule,
        CommonModule,
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
        MatSnackBarModule
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'frontend'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('frontend');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Webshop');
  }));
});
