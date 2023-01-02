interface Passenger {
    name: string;
    sons?: string[];  // the property is not required
}

const passenger_1: Passenger = {
    name: 'Sergio',
}

const passenger_2: Passenger = {
    name: 'Homer',
    sons: ['Bart', 'Lisa', "Maggie"],
}

function showSons(passenger: Passenger): void {

    const countSons = passenger.sons?.length || 0;

    console.log( `Number of sons: ${countSons}` );

}

showSons(passenger_1);
showSons(passenger_2);
