import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { NoCommonsComponent } from './pages/no-commons/no-commons.component';
import { BasicsComponent } from './pages/basics/basics.component';
import { OrderComponent } from './pages/order/order.component';



@NgModule({
  declarations: [
    BasicsComponent,
    NoCommonsComponent,
    NumbersComponent,
    OrderComponent,
  ],
  exports: [
    BasicsComponent,
    NoCommonsComponent,
    NumbersComponent,
    OrderComponent,
  ],
  imports: [
    CommonModule
  ],
})
export class SalesModule { }
