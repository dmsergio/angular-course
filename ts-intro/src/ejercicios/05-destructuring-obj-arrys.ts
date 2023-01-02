/*
    ===== Código de TypeScript =====
*/

interface Player {
    volume: number;
    second: number;
    song: string;
    details: Details;
}

interface Details {
    singer: string;
    year: number;
}

const player: Player = {
    volume: 90,
    second: 36,
    song: 'Amazing song',
    details: {
        singer: 'Amazing Singer',
        year: 2010,
    }
}
//
// destructuring objects
//
const { volume, second, song, details: { singer: detailsSinger } } = player;
// const { singer } = details;

console.log(`The volume is: ${volume}`);
console.log(`The second is: ${second}`);
console.log(`The song is: ${song}`);
console.log(`The singer is: ${detailsSinger}`);

//
// destructuring arrays
//
const languages: string[] = ['Python', 'Type Script', 'Java', 'PHP'];
const [ , type_script, ,  ] = languages;
const [ , , , php  ] = languages;

console.log(`Language: ${type_script}`);
console.log(`Language: ${php}`);
