function cookingByNumbers(...params) {
    let num = Number(params.shift());
    const operationsArray = params.slice();
    const operationsObj = {
        chop() { num /= 2 },
        dice() { num = Math.sqrt(num) },
        spice() { num += 1 },
        bake() { num *= 3 },
        fillet() { num *= 0.80 },
    }
    // Print the result of every operation in order
    operationsArray.forEach(command => {
        operationsObj[command]();
        console.log(num);
    });
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');