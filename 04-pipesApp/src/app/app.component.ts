import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name: string = 'PrimeNG and Pipes';
  obj = {
    name: 'Sergio',
    age: 33,
  }

}
