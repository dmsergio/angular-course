import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { BasicsComponent } from './pages/basics/basics.component';
import { NoCommonsComponent } from './pages/no-commons/no-commons.component';
import { NumbersComponent } from './pages/numbers/numbers.component';
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
    CommonModule,
    PrimeNgModule,
  ],
})
export class SalesModule { }
