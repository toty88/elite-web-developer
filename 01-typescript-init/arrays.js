"use strict";
(() => {
    const ages = [29, 28, 23, 26];
    const names = ['franco', 'Ati', 'Juanma', 'any'];
    ages.push(32);
    ages.pop();
    const products = ['Remera', 'Short', 'Gorras', 'Pantuflas'];
    products.forEach((product) => {
        console.log(product.toLowerCase());
    });
    const values = ["20", 20, "Franco", 50, NaN];
    // la salida de numberValues debe ser un numero
    const numberValues = values.map((value) => {
        if (typeof value === 'number')
            return value;
        if (typeof value === 'string' && Number(value))
            return +value; // unary operator -> convierte a number
        return 0;
    });
    console.log('numberValues', numberValues);
})();
