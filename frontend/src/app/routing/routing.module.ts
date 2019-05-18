import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MainPageComponent } from '../main-page/main-page.component';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
import { ShoppingFormComponent } from '../shopping-form/shopping-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/issues',
    pathMatch: 'full',
  },
  {
    path: 'issues',
    component: MainPageComponent,
  },
  {
    path: 'issues/contact',
    component: ContactFormComponent,
  },
  {
    path: 'issues/cart',
    component: ShoppingCartComponent,
  },
  {
    path: 'issues/buying-form',
    component: ShoppingFormComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class RoutingModule {}
