import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
    providedIn: 'root'
})
export class CountryService {

    private apiUrl: string = 'https://restcountries.com/v3.1';

    get httpParams(): HttpParams {
        return new HttpParams().set('fields', 'name,cca2,population,flags');
    }

    constructor(
        private http: HttpClient,
    ) { }

    searchCountryByName(text: string): Observable<Country[]> {
        const url = `${this.apiUrl}/name/${text}`;
        return this.http.get<Country[]>(url, { params: this.httpParams });
    }

    searchCountryByCapitalName(text: string): Observable<Country[]> {
        const url = `${this.apiUrl}/capital/${text}`;
        return this.http.get<Country[]>(url, { params: this.httpParams });
    }

    getCountryByCode(code: string): Observable<Country[]> {
        const url = `${this.apiUrl}/alpha/${code}`;
        return this.http.get<Country[]>(url);
    }

    getCountryByRegion(region: string): Observable<Country[]> {
        const url = `${this.apiUrl}/region/${region}`;
        return this.http.get<Country[]>(url, { params: this.httpParams });
    }

}
