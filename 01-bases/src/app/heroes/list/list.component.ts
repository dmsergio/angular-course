import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['../../app.component.css']
})
export class ListComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Thor']
  deletedHero: string = '';

  deleteHero(): void {
    // let deletedHero = this.heroes.pop();
    this.deletedHero = this.heroes.pop() || '';

    // if (deletedHero) {
    //   this.deletedHero = deletedHero;
    // } else {
    //   this.deletedHero = '';
    // }
  }

}
