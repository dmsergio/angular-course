// Generics

function whoIAm<T>(arg: T) {
    return arg;
}

let iAmString = whoIAm( 'Hello World' );
let iAmNumber = whoIAm( 100 );
let iAmArray = whoIAm( [0, 1, 2, 3, 4, 5] );

let iAmAnExplicitNumber = whoIAm<Number>( 10 );
