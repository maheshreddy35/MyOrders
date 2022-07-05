import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './address/address.component';
import { BillComponent } from './bill/bill.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'cart',component:CartComponent},
  {path:'bill',component:BillComponent},
  {path:'orders',component:OrdersComponent},
  {path:'address',component:AddressComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
