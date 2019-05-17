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
} from '@angular/material';

import { AgmCoreModule } from '@agm/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ContactFormComponent } from './contact-form/contact-form.component';
import { FavouriteCardsComponent } from './favourite-cards/favourite-cards.component';
import { MainCarouselComponent } from './main-carousel/main-carousel.component';
import { MainPageComponent } from './main-page/main-page.component';
<<<<<<< HEAD
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AccountComponent } from './account/account.component';
=======
import { ApiServiceService } from './api-service.service';
>>>>>>> 86db2921a0a02ab2bd5a3dd1d3dc1a5d3cbd931d

@NgModule({
  declarations: [
    AppComponent,
    FavouriteCardsComponent,
    MainCarouselComponent,
    MainPageComponent,
    ContactFormComponent,
<<<<<<< HEAD
    LoginComponent,
    RegistrationComponent,
    AccountComponent,
=======
>>>>>>> 86db2921a0a02ab2bd5a3dd1d3dc1a5d3cbd931d
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
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
<<<<<<< HEAD
=======
    HttpClientModule,
>>>>>>> 86db2921a0a02ab2bd5a3dd1d3dc1a5d3cbd931d
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
    HttpClientModule,
  ],
  providers: [ApiServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
