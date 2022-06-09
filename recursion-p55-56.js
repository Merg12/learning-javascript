// function isEven(number) {
//     let tester = isEven();
//     if (number == 0) {
//         console.log("even");
//     } else if (number == 1) {
//         console.log("odd");
//     }
//     tester = number - 2;
//     return tester;
// }

function isEven(positiveWholeNumber) {
    if(positiveWholeNumber == 0) {
        return "even";
    }
    else if (positiveWholeNumber == 1) {
        return "odd";
    }
    return isEven(positiveWholeNumber - 2)
}

console.log(isEven(576));

/*  
    0 = even
    1 = odd
    N - 2 = even
    function isEven() {return isEven()}
*/