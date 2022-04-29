import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OrdersBHComponent} from "./components/orders-bh/orders-bh.component";
import {OrdersDetailsBHComponent} from "./components/orders-details-bh/orders-details-bh.component";

const routes: Routes = [
  {
    path: '',
    component:OrdersBHComponent
  },
  {
    path:'order/items/:id',
    component: OrdersDetailsBHComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
