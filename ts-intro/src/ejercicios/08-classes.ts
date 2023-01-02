class Person {
    constructor (
        public name: string,
        public address: string,
    ) { }
}

class Hero extends Person {
    // private: la propiedad únicamente será visible dentro de la propia clase
    // public: la propiedad será accesible desde cualquier sitio
    // static: la propiedad es propia de la clase, no de la instancia

    // public name: string;
    // private age: number;
    // public power: string;

    // constructor( name: string, age: number, power: string ) {
    //     console.log('Creating Hero...');
    //     this.name = name;
    //     this.age = age;
    //     this.power = power;
    // }

    // declarando el tipo de acceso en los propios argumentos, se evita
    // declarar las propiedades de manera explícita en la clase
    constructor(
        public name: string,
        public address: string,
        public superHeroName: string,
        public age: number,
        public power: string,
    ) {
        super( name, address );
    }
}

const hero = new Hero('Bruce Wayne', 'Gotham City', 'Batman',  39, 'Rich');
console.log(hero);
