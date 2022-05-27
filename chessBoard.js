// let size = 0, hashtag = "#", space = " ";
// for(let count = 0; count <= 1; count++){
//     hashtag = hashtag + space + hashtag;
// }
// console.log(hashtag);

// let count = 0, size = 8;
// let oddRow = "";
// while (count < size) {
//     let spaceFirstHash = " #";
//     oddRow = oddRow + spaceFirstHash;
//     count++;
// }
//     console.log(oddRow + "\n");

// let evenRow = "";
// while (count < size) {
//     let hashFirstSpace = "# ";
//     evenRow = evenRow + hashFirstSpace;
//     count++;
// }
//     console.log(evenRow + "\n");

let count = 0, size = 16, oddRow = "", evenRow = "";

while (count < size) {
    let spaceFirstHash = " #", hashFirstSpace = "# ";
    oddRow = oddRow + spaceFirstHash;
    evenRow = evenRow + hashFirstSpace;
    count = count + 2;
}

for (let count = 0; count < size/2; count++) {
    console.log(oddRow + "\n" + evenRow);    
}