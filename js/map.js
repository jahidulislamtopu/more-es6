const numbers = [2, 8, 4, 6, 3];

function getDoubles(numbers) {

    const output = [];
    for (const num of numbers) {
        const doubled = doubleIt(num);
        output.push(doubled);
    }
    return output;

}

// function doubleItOld(num) {
//     return number * 2;
// }

const doubleIt = num => num * 2;

const makeDouble = numbers.map(doubleIt);

const result = getDoubles(numbers);
console.log(result);
console.log(makeDouble);