import { Injectable } from "@angular/core";

import { Character } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService {

    private _characters: Character[] = [
        {
          name: 'Goku',
          power: 15000,
        },
        {
          name: 'Vegetta',
          power: 12000,
        },
        {
          name: 'Krilin',
          power: 1200,
        },
    ];

    get characters(): Character[] {
        return [...this._characters];
    }

    constructor() {}

    addCharacter( character: Character ) {
        this._characters.push(character);
    }

}