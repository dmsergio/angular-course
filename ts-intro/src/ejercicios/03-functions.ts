/*
    ===== Código de TypeScript =====
*/

// functions
function add(a: number, b: number): number {
    return a + b;
}

const result = add(3, 11);

const addArrow = (a: number, b: number): number => {
    return a + b;
}

function multiply(a: number, b: number, c: number = 1): number {
    return a * b * c;
}

const resultMultiply = multiply(10, 20);

interface Character {
    name: string;
    healthPoints: number;
    logHealthPoints: () => void;
}

function fix(character: Character, healthPoints: number): void {
    character.healthPoints += healthPoints;
}

const newCharacter: Character = {
    name: "Frodo",
    healthPoints: 20,
    logHealthPoints() {
        console.log(`Health points: ${this.healthPoints}`);
    },
}

fix(newCharacter, 50);
newCharacter.logHealthPoints();
console.log(result);
console.log(resultMultiply);
