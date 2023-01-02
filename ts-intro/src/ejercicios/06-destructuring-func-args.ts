/*
    ===== Código de TypeScript =====
*/

console.log('This is running when the module has been imported');

export interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: 'iPhone 13 Pro',
    price: 1150,
}

const tablet: Product = {
    description: 'iPad Pro 9 Gen',
    price: 800,
}

export function getTaxes( products: Product[]): [Number, Number] {
    let total = 0;

    // products.forEach((product: Product) => {
    //     total += product.price;
    // })
    // destructuring arguments
    products.forEach(({ price }) => {
        total += price;
    })

    return [total, total * 0.21];
}

const products = [ phone, tablet ];
const [ total, taxes ] = getTaxes(products);
console.log(`Total: ${total}€`);
console.log(`Total taxes: ${taxes}€`);
