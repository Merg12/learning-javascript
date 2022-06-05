function findSolution(target) {
    function find(current, history) {
        if(current == target) {
            return "its all good now";
        } else if(current > target) {
            return "you went over";
        } else {
            return find(current + 5, `(${history} + 5)`) || find(current * 3, `(${history} * 3)`);
        }
    }
    return find(2, "1")
}
console.log(findSolution(4));

/*
'history' is actually a string that's going to record how we reached this 'target/current' number

so line 8 return is pretty wild, there's the || operator and on each side there's another function call
so how does it work?


*/