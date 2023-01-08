import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
})
export class BasicsComponent implements OnInit {

  nameLowercase: string = 'sergio';
  nameUpper: string = 'SERGIO';
  nameFull: string = 'sErGiO dIaZ';

  constructor() { }

  ngOnInit(): void {
  }

}
