"use strict";
const num1Element = document.getElementById('num1');
const num2Element = document.getElementById('num2');
const buttonElement = document.querySelector('button');
const numResult = []; ////generic type
// const numResult: number[] = [];
const textResults = [];
function sum(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + ' ' + num2;
    }
    return +num1 + +num2;
}
function printResult(resultObj) {
    console.log(resultObj.val);
}
buttonElement.addEventListener('click', () => {
    const num1 = num1Element.value; /// these give us string
    const num2 = num2Element.value;
    const result = sum(+num1, +num2);
    const Stringresult = sum(num1, num2);
    // console.log(result);
    // console.log(Stringresult);
    numResult.push(result);
    textResults.push(Stringresult);
    console.log(numResult, textResults);
    printResult({ val: result, timestamp: new Date() });
});
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("what'siup");
    }, 1000);
});
myPromise.then(result => {
    console.log(result.split('i'));
});
