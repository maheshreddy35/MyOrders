import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { BillComponent } from './bill/bill.component';
import { OrdersComponent } from './orders/orders.component';
import { AddressComponent } from './address/address.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    BillComponent,
    OrdersComponent,
    AddressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
