let credit = 1600;
let monthlyPayment = 110;
let months = 0;
// How many months till last payment

//Quick solution: 
//console.log(Math.ceil(credit / monthlyPayment));

// while loop solution
while (credit > 0) {
    credit = credit - monthlyPayment;
    months++;
}
console.log(months);