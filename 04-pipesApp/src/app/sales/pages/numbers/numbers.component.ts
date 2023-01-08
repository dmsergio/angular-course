import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
})
export class NumbersComponent implements OnInit {

  netSales: number = 78954703957.789;
  percent: number = 0.47;

  constructor() { }

  ngOnInit(): void {
  }

}
