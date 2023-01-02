
function classDecorator<T extends { new (...args: any[]): {} }>(
    constructor: T
) {
    return class extends constructor {
        newProperty = 'new property';
        hello = 'override';
    }
}

@classDecorator
class MySuperClass {
    public myProperty: string = 'Hey';

    print() {
        console.log('Hello world');
    }
}

console.log( MySuperClass );

const myClass = new MySuperClass();

console.log( myClass );
console.log( myClass.myProperty );
