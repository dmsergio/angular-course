import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterModule } from "./counter/counter.module";
import { HeroesModule } from './heroes/heroes.module';
import { DbzModule } from './dbz/dbz.module';
// import { MainPageComponent } from './dbz/main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    // MainPageComponent,
    // CounterComponent,
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    CounterModule,
    DbzModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    // CounterComponent,
  ]
})
export class AppModule { }
