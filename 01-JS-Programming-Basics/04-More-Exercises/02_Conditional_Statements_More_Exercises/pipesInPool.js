function pipesInPool(input) {
    let v = Number(input[0]);
    let p1 = Number(input[1]);
    let p2 = Number(input[2]);
    let h = Number(input[3]);

    let fieldWaterVolumeP1 = h * p1;
    let fieldWaterVolumeP2 = h * p2;
    let totalFieldWater = fieldWaterVolumeP1 + fieldWaterVolumeP2;
    let percentageFieldWaterVolume = (totalFieldWater / v) * 100;
    let percentageFieldWaterP1 = (fieldWaterVolumeP1 / totalFieldWater) * 100;
    let percentageFieldWaterP2 = (fieldWaterVolumeP2 / totalFieldWater) * 100;

    let diff = Math.abs(v - totalFieldWater);
    if (v >= totalFieldWater) {
        console.log(`The pool is ${percentageFieldWaterVolume.toFixed(2)}% full. Pipe 1: ${percentageFieldWaterP1.toFixed(2)}%. Pipe 2: ${percentageFieldWaterP2.toFixed(2)}%.`);
    } else {
        console.log(`For ${h.toFixed(2)} hours the pool overflows with ${diff.toFixed(2)} liters.`);
    }
}

pipesInPool(["100", "100", "100", "2.5"])