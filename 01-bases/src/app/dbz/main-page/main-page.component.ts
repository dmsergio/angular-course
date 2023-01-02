import { Component } from '@angular/core';

import { Character } from '../interfaces/dbz.interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  newCharacter: Character = {
    name: '',
    power: 0,
  }

  constructor() {}

}
