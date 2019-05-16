import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RoutingModule } from './routing/routing.module';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';

import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatListModule,
  MatFormFieldModule,
  MatTableModule,
} from '@angular/material';

import { AgmCoreModule } from '@agm/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ContactFormComponent } from './contact-form/contact-form.component';
import { FavouriteCardsComponent } from './favourite-cards/favourite-cards.component';
import { MainCarouselComponent } from './main-carousel/main-carousel.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { ApiServiceService } from './api-service.service';

@NgModule({
  declarations: [
    AppComponent,
    FavouriteCardsComponent,
    MainCarouselComponent,
    MainPageComponent,
    ContactFormComponent,
    SearchBarComponent,
    SearchBoxComponent,
    ElectronicsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
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
    RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatTableModule,
    HttpClientModule,
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
    RouterTestingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatTableModule,
    HttpClientModule,
  ],
  providers: [ApiServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
