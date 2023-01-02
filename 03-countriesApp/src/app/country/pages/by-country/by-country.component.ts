import { Component, OnInit } from '@angular/core';

import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
    selector: 'app-by-country',
    templateUrl: './by-country.component.html',
    styleUrls: ['./by-country.component.css']
})
export class ByCountryComponent {

    text: string = '';
    hasError: boolean = false;
    countries: Country[] = [];
    recommendedCountries: Country[] = [];
    showRecommendsList: boolean = false;

    constructor(
        private countryService: CountryService,
    ) { }

    search(text: string) {
        this.hasError = false;
        this.text = text;
        this.countryService.searchCountryByName(this.text).subscribe(
            (countries: Country[]) => {
                this.countries = countries;
            },
            error => {
                this.hasError = true;
                this.countries = [];
            }
        );
    }

    showRecommends(text: string) {
        this.text = text;
        this.showRecommendsList = true;
        if (text) {
            this.countryService.searchCountryByName(text)
                .subscribe(
                    countries => this.recommendedCountries = countries.splice(0, 5),
                    error => this.recommendedCountries = [],
                );
        } else {
            this.recommendedCountries = [];
        }
    }

}
