function multiplier(factor) {
    return number => number * factor;
}

let twice = multiplier(3);
console.log(twice(5));
console.log(twice(7));