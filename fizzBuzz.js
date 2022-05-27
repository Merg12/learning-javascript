// FizzBuzz

// for (let count = 0; count <= 100; count++) {
//     switch (count) {
//         case (count % 3 == 0):
//             console.log("Fizz");
//             break;
//         case (count % 5 == 0):
//             console.log("Buzz");
//             break;
//         case (count % 3 == 0 && count % 5 == 0):
//             console.log("FizzBuzz");
//             break;
//         default:
//             console.log(count);
//             break;
//     }
// }

// issue with using switch case is case has to equal exactly what switch holds. I don't see a way to put an expression in here

// switch (count = 1) {
//     case "1":
//         console.log(count);
//         break;

//     default:
//         break;
// }

for (let count = 0; count <= 100; count++) {
    if (count % 3 == 0 && count % 5 == 0) {
        console.log("FizzBuzz");
    } else if (count % 3 == 0) {
        console.log("Fizz");
    } else if (count % 5 == 0) {
        console.log("Buzz");
    } else {console.log(count);}      
}

// book answer
// for (var n = 1; n <= 100; n++) {
//     var output = "";
//     if (n % 3 == 0)
//       output += "Fizz";
//     if (n % 5 == 0)
//       output += "Buzz";
//     console.log(output || n);
//   }