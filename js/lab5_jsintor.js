// 1. Create a function using function declaration named sum with one parameter of Array type, the
// returned result is the sum of all elements which are greater than 20.

function sum(array) {
    let a = array.filter(p => p > 20)
        .reduce((a, b) => a + b,0);
    return a;
}

let testarr = [21, 34, 3, 4, 5];
sum(testarr);

//2. Create a function using function expression named getNewArray with one parameter of String
// Array, return a new array which contains all string, length is greater than and equal to 5, and
// contains letter ‘a’.

let getNewArray = function greaterThan5(param) {
    let res = param.filter(p => p.length > 5)
                .filter(p => p.includes("a"));              
    return res;
}

let stringArr = ["sfasg","sga","fdsdsghadh","qwr","aghsighs"];
getNewArray(stringArr)