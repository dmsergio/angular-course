import { getTaxes, Product } from "./06-destructuring-func-args";

const myProducts: Product[] = [
    {
        description: 'Phone 1',
        price: 1000,
    },
    {
        description: 'Phone 2',
        price: 1200,
    },
];

const [ total, taxes ] = getTaxes(myProducts);

console.log(`Total: ${total}€`)
console.log(`Total taxes: ${taxes}€`)
