/*
    ===== Código de TypeScript =====
*/

// arrays
let my_array: string[] = ['Type Script', 'Python'];
let my_second_array: (string)[] = ['Type Script', 'Python'];


// objects
interface PersonBis {
    name: string;
    last_name: string;
    age: number;
    favorite_languages?: string[]
}

const person_1: PersonBis = {
    name: 'Sergio',
    last_name: 'Díaz Martínez',
    age: 33,
    favorite_languages: ['Python', 'Type Script'],
}

const person_2: PersonBis = {
    name: '',
    last_name: '',
    age: 0,
}

console.log(person_1);
