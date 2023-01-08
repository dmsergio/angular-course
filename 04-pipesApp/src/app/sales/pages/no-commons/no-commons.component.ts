import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-commons',
  templateUrl: './no-commons.component.html',
})
export class NoCommonsComponent implements OnInit {

  name: string = 'Sergio';
  gender: string = 'male';

  genderMap = {
    'male': 'invitarlo',
    'female': 'invitarla',
  }

  constructor() { }

  ngOnInit(): void { }

}
