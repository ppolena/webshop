import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RoutingModule } from './routing/routing.module';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';

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
  MatTabsModule,
  MatMenuModule,
  MatFormFieldModule,
  MatTableModule,
  MatSliderModule,
  MatPaginatorModule,
  MatGridListModule,
  MatSelectModule,
  MatInputModule,
  MatSnackBarModule,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material';

import { MatDialogModule } from '@angular/material/dialog';
import { AgmCoreModule } from '@agm/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ContactFormComponent } from './contact-form/contact-form.component';
import { FavouriteCardsComponent, CardsDialog } from './favourite-cards/favourite-cards.component';
import { MainCarouselComponent } from './main-carousel/main-carousel.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShoppingFormComponent } from './shopping-form/shopping-form.component';
import { MainPageComponent } from './main-page/main-page.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ApiService } from './api.service';
import { RegistrationFailedDialogComponent } from './registration-failed-dialog/registration-failed-dialog.component';
import { LoginFailedDialogComponent } from './login-failed-dialog/login-failed-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    FavouriteCardsComponent,
    MainCarouselComponent,
    MainPageComponent,
    ContactFormComponent,
    ShoppingCartComponent,
    ShoppingFormComponent,
    LoginComponent,
    RegistrationComponent,
    SearchBarComponent,
    RegistrationFailedDialogComponent,
    LoginFailedDialogComponent,
    CardsDialog,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
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
    RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatTableModule,
    HttpClientModule,
    MatTabsModule,
    MatMenuModule,
    CommonModule,
    MatFormFieldModule,
    MatMenuModule,
    MatSliderModule,
    MatPaginatorModule,
    MatGridListModule,
    MatSelectModule,
    MatInputModule,
    MatDialogModule,
    MatSnackBarModule,
  ],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
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
    MatMenuModule,
    CommonModule,
    MatFormFieldModule,
    MatMenuModule,
    MatSliderModule,
    MatPaginatorModule,
    MatGridListModule,
    MatSelectModule,
    MatInputModule,
    MatDialogModule,
    MatSnackBarModule,
  ],
  entryComponents: [
    CardsDialog,
    RegistrationFailedDialogComponent,
    LoginFailedDialogComponent,
  ],
  providers: [ApiService, { provide: MAT_DIALOG_DATA, useValue: {} }],
  bootstrap: [AppComponent],
})
export class AppModule {}
