import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['../../app.component.css']
})
export class SearchComponent implements OnInit {

  constructor(
    private gifsService: GifsService,
  ) { }

  ngOnInit(): void {
  }

  @ViewChild('textToSearch') textToSearch!: ElementRef<HTMLInputElement>;

  search() {
    const value = this.textToSearch.nativeElement.value;
    if ( value.trim().length === 0 ) {
      return;
    }
    this.textToSearch.nativeElement.value = '';
    this.gifsService.searchGifs( value );
  }

}
