function highJump(input) {
    let targetHeight = Number(input[0]);
    let succeededJumpsCount = 0;
    let unsucceededJumpsCount = 0;
    let barStartingHeigth = targetHeight - 30;
    let lastJumpHeight = 0;
    let totalJumpsCount = 0;

    for (let i = 1; i < input.length; i++) {
        totalJumpsCount++;
        let currentJumpHeight = Number(input[i]);
        if (lastJumpHeight >= targetHeight) {
            console.log(`Tihomir succeeded, he jumped over ${lastJumpHeight}cm after ${totalJumpsCount} jumps.`);
            break;
        }

        if (unsucceededJumpsCount === 3) {
            console.log(`Tihomir failed at ${lastJumpHeight}cm after ${totalJumpsCount} jumps.`);
        }

        if (currentJumpHeight > barStartingHeigth) {
            barStartingHeigth += 5.00;
            lastJumpHeight = barStartingHeigth;
            succeededJumpsCount++;
        } else {
            unsucceededJumpsCount++;
        }
    }
}

highJump(["250",
    "225",
    "224",
    "225",
    "228",
    "231",
    "235",
    "234",
    "235"])