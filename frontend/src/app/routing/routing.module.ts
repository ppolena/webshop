import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MainPageComponent } from '../main-page/main-page.component';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { LoginComponent } from '../login/login.component';
import { RegistrationComponent } from '../registration/registration.component';

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
    path: 'issues/login',
    component: LoginComponent,
  },
  {
    path: 'issues/registration',
    component: RegistrationComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class RoutingModule {}
