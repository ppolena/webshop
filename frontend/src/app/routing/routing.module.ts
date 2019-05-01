import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FavouriteCardsComponent } from '../favourite-cards/favourite-cards.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/issues',
    pathMatch: 'full',
  },
  {
    path: 'issues/main',
    component: FavouriteCardsComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class RoutingModule {}
