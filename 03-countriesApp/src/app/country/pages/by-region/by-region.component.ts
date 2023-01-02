import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
    selector: 'app-by-region',
    templateUrl: './by-region.component.html',
    styleUrls: ['./by-region.component.css']
})
export class ByRegionComponent implements OnInit {

    regions: string[] = [
        'africa',
        'americas',
        'asia',
        'europe',
        'oceania',
    ];
    activatedRegion: string = '';
    countries: Country[] = [];

    constructor(
        private countryService: CountryService,
    ) { }

    ngOnInit(): void {
    }

    getCssClass(region: string): string {
        return (region === this.activatedRegion) ? 'btn btn-primary': 'btn btn-outline-primary';
    }

    toActivateRegion(region: string) {
        if (region === this.activatedRegion) { return; }

        this.activatedRegion = region;
        this.countries = [];
        this.countryService.getCountryByRegion(this.activatedRegion).subscribe(
            (countries: Country[]) => {
                this.countries = countries;
            },
            error => {
                console.log(error);
            }
        );
    }

}
