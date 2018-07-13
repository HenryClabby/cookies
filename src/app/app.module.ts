import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OrderComponent } from './order/order.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';

import { FormsModule } from '@angular/forms';
import { PastDesignsComponent } from './past-designs/past-designs.component';
import { InfoComponent } from './info/info.component'; // for NgModel

@NgModule({
  declarations: [
    AppComponent,
    OrderComponent,
    HomeComponent,
    PastDesignsComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
