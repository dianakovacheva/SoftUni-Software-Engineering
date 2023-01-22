function assembleCar({ model, power, color, carriage, wheelsize }) {
    // Possible engines
    const enginesObj = {
        smallEngine: { power: 90, volume: 1800 },
        normalEngine: { power: 120, volume: 2400 },
        monsterEngine: { power: 200, volume: 3500 },
    }
    // Creat an engine object with the engine options, depending on the given input power, to use it later in your final carObj
    let engine = {};
    if (power <= 90) {
        engine = enginesObj.smallEngine;
    } else if (power <= 120) {
        engine = enginesObj.normalEngine;
    } else {
        engine = enginesObj.monsterEngine;
    }
    // The size of the wheels can be only an odd number. Round it down to the nearest odd number
    let wheelsNewSize = wheelsize;
    if (wheelsize % 2 === 0) {
        wheelsNewSize = Math.round(wheelsize) - 1;
    }
    // Result object
    const carObj = {
        model,
        engine,
        carriage: {
            type: carriage,
            color,
        },
        wheels: Array(4).fill(wheelsNewSize),
    }
    // Return the result object
    return carObj;
}

assembleCar({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
});