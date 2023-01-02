import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _apiKey: string = 'Epzv25o3BcJd9r1LZe0ii2QoxPAX15vQ';
  private _apiURL: string = 'https://api.giphy.com/v1/gifs';
  private _history: string[] = [];

  public results: Gif[] = [];

  get history() {
    return [...this._history];
  }

  constructor(
    private http: HttpClient,
  ) {
    this._history = JSON.parse( localStorage.getItem( 'history' )! ) || [];
    this.results = JSON.parse( localStorage.getItem( 'lastResults' )! ) || [];
    // if ( localStorage.getItem( 'history' ) ) {
    //   this._history = JSON.parse( localStorage.getItem( 'history' )! );
    // }
  }

  searchGifs( query: string = '' ) {
    query = query.trim().toLowerCase();

    if ( !this._history.includes( query ) ) {
      this._history.unshift( query );
      this._history = this._history.splice( 0, 10 );

      localStorage.setItem( 'history', JSON.stringify( this._history ) );
    }

    const params = new HttpParams()
      .set('api_key', this._apiKey)
      .set('q', query)
      .set('limit', '10');
    this.http.get<SearchGifsResponse>(
      `${ this._apiURL }/search`,
      { params }
    ).subscribe( response => {
      this.results = response.data;
      localStorage.setItem( 'lastResults', JSON.stringify( this.results ) );
    });
  }
}
