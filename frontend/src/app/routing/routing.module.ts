import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MainPageComponent } from '../main-page/main-page.component';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
import { ShoppingFormComponent } from '../shopping-form/shopping-form.component';
import { LoginComponent } from '../login/login.component';
import { RegistrationComponent } from '../registration/registration.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  },
  {
    path: 'contact',
    component: ContactFormComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'cart',
    component: ShoppingCartComponent,
  },
  {
    path: 'buying-form',
    component: ShoppingFormComponent,
  },
  {
    path: 'registration',
    component: RegistrationComponent,
  },
  { 
    path: '**',
    redirectTo: '', 
    component: MainPageComponent 
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class RoutingModule {}
