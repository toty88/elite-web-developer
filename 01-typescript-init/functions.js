"use strict";
const transformNumbers = (nums) => {
    return nums.map((num) => num * 2);
};
const sumNumbers = (nums) => {
    console.log('sumar numeros y no retornar nada');
    return undefined;
};
const sumAndReturnNumbers = (nums, message) => {
    const total = nums.reduce((prev = 0, next) => prev + next);
    return `${message} ${total}`;
};
sumAndReturnNumbers([1, 2, 3, 4, 5]); // undefined 15
