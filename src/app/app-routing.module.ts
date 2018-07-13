import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from './order/order.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { PastDesignsComponent } from './past-designs/past-designs.component';

const routes: Routes = [
  { path: 'order', component: OrderComponent },
  { path: 'home', component: HomeComponent},
  { path: '', component: HomeComponent},
  { path: 'info', component: InfoComponent},
  { path: 'past-designs', component: PastDesignsComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [ RouterModule ],
})
export class AppRoutingModule { }
