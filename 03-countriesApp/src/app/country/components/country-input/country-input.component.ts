import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styleUrls: ['./country-input.component.css']
})
export class CountryInputComponent implements OnInit {

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string = '';

  deBouncer: Subject<string> = new Subject();

  text: string = '';

  constructor() { }

  ngOnInit(): void {
    this.deBouncer
    .pipe(debounceTime(300))
    .subscribe(
      value => {
        this.onDebounce.emit(value);
      }
    );
  }

  search() {
    this.onEnter.emit(this.text);
  }

  keyPressed() {
    this.deBouncer.next(this.text);
  }

}
