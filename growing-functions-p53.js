function printsFormatedNumberOfFarmAnimals(number,animalType) {
    let numberString = String(number);
    while (numberString.length < 3) {
        numberString = "0" + numberString;
    }
    console.log(`${numberString} ${animalType}`);
}

function callsTheFunctionOfEachAnimal(cows, chickens, pigs, dogs) {
    printsFormatedNumberOfFarmAnimals(cows, "Cows");
    printsFormatedNumberOfFarmAnimals(chickens, "Chickens");
    printsFormatedNumberOfFarmAnimals(pigs, "Pigs");
    printsFormatedNumberOfFarmAnimals(dogs, "Dogs");
}

callsTheFunctionOfEachAnimal(1,2,3,59);