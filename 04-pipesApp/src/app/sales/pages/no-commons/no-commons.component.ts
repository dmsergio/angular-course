import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-commons',
  templateUrl: './no-commons.component.html',
})
export class NoCommonsComponent implements OnInit {

  // i18nSelect
  name: string = 'Sergio';
  gender: string = 'male';
  genderMap = {
    'male': 'invitarlo',
    'female': 'invitarla',
  }

  // i18nPlural
  clients: string[] = [
    'Frodo',
    'Bilbo',
    'Gandaf',
    'Sauron',
    'Legolas',
    'Elrond',
  ];
  clientsAux: string[] = [];
  clientsMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando',
  }

  // keyValue pipe
  person = {
    name: 'Sergio',
    age: 33,
    address: 'Valencia, Spain',
  }

  // Async pipe
  myObservable = interval(3000);

  myPromise = new Promise( (resolve, reject) => {
    setTimeout( () => {
      resolve( 'Promise resolved!' );
    }, 3500 );
  } );


  constructor() { }

  ngOnInit(): void { }

  changePerson() {
    if (this.gender === 'male') {
      this.name = 'Inma';
      this.gender = 'female';
    } else {
      this.name = 'Sergio';
      this.gender = 'male';
    }
  }

  removeClient() {
    if (this.clients.length > 0) {
      this.clientsAux.push(this.clients.pop()!);
    }
  }

  resetClients() {
    this.clients = [...this.clientsAux];
    this.clientsAux = [];
  }

}
