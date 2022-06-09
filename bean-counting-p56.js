/* 
you can get the Nth char from a string using "string"[N].

this is what it's looking for ==> return "string"[N]

1st character is position 0, last character is position string.length - 1

function countBs() {}

if(N == "B") {}
if(N != "B") {}

need a counter
*/

function countBs(N) {
    let word = String(N);
    let numberOfBs = 0;
    for (count = 0; count < word.length; count ++) {
        if("string"[count] == "B") {
            numberOfBs = numberOfBs + 1;
        } else if("string"[count] != "B") {

            }
        }
    }

countBs("BaBaB")