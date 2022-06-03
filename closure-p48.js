// function multiplier(factor) {
//     return number => number * factor;
// }

// let twice = multiplier(2);
// console.log(twice(5));
// console.log(twice(7));

function addNumbers(factor) {
    return result => result * factor;
}

let multiAdd = addNumbers(3);
console.log(multiAdd(8));