<<<<<<< HEAD
import { BrowserModule } from "@angular/platform-browser";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
=======
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';


>>>>>>> 149229c560f55892ff777c233fd231e7f8d320a5

import { AppComponent } from "./app.component";
import { MainPageComponent } from "./main-page/main-page.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { MatListModule, MatCardModule, MatIconModule } from "@angular/material";


import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, 
        MatCheckboxModule, 
        MatToolbarModule, 
        MatIconModule, 
        MatCardModule, 
        MatListModule} from '@angular/material';


import { AgmCoreModule } from '@agm/core';

import { CarouselModule } from 'ngx-bootstrap/carousel';



@NgModule({
  declarations: [AppComponent, MainPageComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
<<<<<<< HEAD
    MatListModule,
    MatCardModule,
    MatIconModule
=======
    NoopAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_KEY'
    }),
    CarouselModule.forRoot(),
    MatCardModule,
    MatListModule,
    RouterModule,
    RouterTestingModule
  ],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    RouterModule,
    RouterTestingModule
>>>>>>> 149229c560f55892ff777c233fd231e7f8d320a5
  ],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatListModule,
    MatCardModule,
    MatIconModule
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
<<<<<<< HEAD
export class AppModule {}
=======
export class AppModule { }
>>>>>>> 149229c560f55892ff777c233fd231e7f8d320a5
