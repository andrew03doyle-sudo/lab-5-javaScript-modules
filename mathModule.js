
import { toUpperCase } from './stringModule.js';

export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

export default function multiply(a, b) {
    return a * b;
}

export function addAndLogUpper(a, b) {
    const result = add(a, b);
    const resultString = result.toString();
    const upper = toUpperCase(resultString);
    console.log('addAndLogUpper:', upper);
}