function solution(num) {
    let initialNum = num;
    return function (numberToAdd) {
        return initialNum + numberToAdd;
    }
}


let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));