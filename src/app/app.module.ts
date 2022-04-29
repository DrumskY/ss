import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { OrdersBHComponent } from './components/orders-bh/orders-bh.component';
import { OrdersItemBHComponent } from './components/orders-item-bh/orders-item-bh.component';
import { OrdersDetailsBHComponent } from './components/orders-details-bh/orders-details-bh.component';
import {BHDataService} from "./service/bh-data.service";

@NgModule({
  declarations: [
    AppComponent,
    OrdersBHComponent,
    OrdersItemBHComponent,
    OrdersDetailsBHComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    BHDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
