import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';

import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
    selector: 'app-show-country',
    templateUrl: './show-country.component.html',
    styleUrls: ['./show-country.component.css']
})
export class ShowCountryComponent implements OnInit {

    public country!: Country;

    constructor(
        private activatedRoute: ActivatedRoute,
        private countryService: CountryService,
    ) { }

    ngOnInit(): void {

        this.activatedRoute.params
            .pipe(
                switchMap(
                    (param: any) => this.countryService.getCountryByCode(param.id)
                ),
                tap(console.log)
            )
            .subscribe( countries => this.country = countries[0])

        // this.activatedRoute.params
        //     .subscribe( (params: any) => {
        //         console.log(params.id!);
        //         this.countryService
        //             .getCountryByCode(params.id)
        //             .subscribe(
        //                 countries => {
        //                     this.country = countries[0];
        //                     console.log(countries[0]);
        //                 }
        //             )
        //     });
    }

    getTranslations(): string[] {
        let translations: string[] = [];
        for (const [key, value] of Object.entries(this.country.translations)) {
            translations.push(value.common);
        }
        return translations;
    }

}
