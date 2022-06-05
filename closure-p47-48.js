// function wrapValue(n) {
//     let local = n;
//     return () => local;
// }

function wrapValue(n) {
    // let local = n;
    // return () => local;
    return local => n;
    };

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
console.log(wrap2());
// console.log(wrapValue(1));
// console.log(wrapValue(2));