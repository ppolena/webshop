import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FavouriteCardsComponent } from '../favourite-cards/favourite-cards.component';
import { MainCarouselComponent } from '../main-carousel/main-carousel.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/issues',
    pathMatch: 'full',
  },
  {
    path: 'issues',
    component: FavouriteCardsComponent,
  },
  {
    path: 'issues/carousel',
    component: MainCarouselComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class RoutingModule {}
