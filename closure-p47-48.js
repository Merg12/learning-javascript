// function wrapValue(n) {
//     let local = n;
//     return () => local;
// }

function wrapValue(n) {
    let local = n;
    let twicelocal = 2 * n
    return () => local;
    };

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
console.log(wrap2());