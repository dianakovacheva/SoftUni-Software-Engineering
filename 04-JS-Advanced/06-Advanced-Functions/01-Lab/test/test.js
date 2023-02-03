const arrowSum = a => {
    return b => {
        return c => {
            return a + b + c;
        }
    }
};

console.log(arrowSum(1)(2)(3));