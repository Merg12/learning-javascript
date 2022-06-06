function printFarmInventory(cows, chickens) {
    let cowString = String(cows);
    while (cowString.length < 3) {
        cowString = "0" + cowString;
    }
    console.log(`${cowString} Cows`);

    let chickensString = String(chickens);
    while (chickensString.length < 3) {
        chickensString = "0" + chickensString;
    }
    console.log(`${chickensString} Chickens`);
}
printFarmInventory(2, 54)