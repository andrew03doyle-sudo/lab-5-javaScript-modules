import multiply, { add, subtract, addAndLogUpper } from './mathModule.js';

import { toUpperCase, toLowerCase } from './stringModule.js';

function findMax(arr) {
    if (arr.length === 0) {
        return null;
    }

    let max = arr[0];
    for (const value of arr) {
        if (value > max) {
            max = value;
        }
    }
    return max;
}

function reverseArray(arr) {
    const result = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        result.push(arr[i]);
    }
    return result;
}

console.log('add: ', add(5, 3));
console.log('subtract: ', subtract(10, 4));
console.log('multiply: ', multiply(4, 5));

console.log('uppercase: ', toUpperCase('hello'));
console.log('lowercase: ', toLowerCase('GOODBYE'));

console.log('max: ', findMax([1, 2, 3, 4, 5]));
console.log('reversed: ', reverseArray([1, 2, 3]));

addAndLogUpper(10, 20);

const numbers = [10, 3, 27, 8, 15];

const maxNumber = findMax(numbers);
console.log('final challenge - max number:', maxNumber);

const multiplied = multiply(maxNumber, 2);
console.log('final challenge - multiplied:', multiplied);

const finalUpperResult = toUpperCase(multiplied.toString());
console.log('final challenge - uppercased result:', finalUpperResult);