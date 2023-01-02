import { Component, OnInit } from '@angular/core';

import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
    selector: 'app-by-capital',
    templateUrl: './by-capital.component.html',
    styleUrls: ['./by-capital.component.css']
})
export class ByCapitalComponent implements OnInit {

    text: string = '';
    hasError: boolean = false;
    countries: Country[] = [];

    constructor(
        private countryService: CountryService,
    ) { }

    ngOnInit(): void {
    }

    search(text: string) {
        this.hasError = false;
        this.text = text;
        this.countryService.searchCountryByCapitalName(this.text).subscribe(
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
        console.log('Recommends:', text);
    }

}
