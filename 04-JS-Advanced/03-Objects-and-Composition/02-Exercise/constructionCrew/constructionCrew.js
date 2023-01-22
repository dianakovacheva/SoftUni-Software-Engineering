function constructionCrew(workerObj) {
    // Calculate the required amount of water
    const requiredAmountOfWater = 0.1 * workerObj.weight * workerObj.experience;
    // Check if you receive a worker whose dizziness property is set to true
    if (workerObj.dizziness) {
        // Increase the levelOfHydrated by requiredAmountOfWater
        workerObj.levelOfHydrated += requiredAmountOfWater;
        // Change the dizziness property to false
        workerObj.dizziness = false;
    }
    // Return the same object that was passed in
    return workerObj;
}

constructionCrew({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: false
});

constructionCrew({
    weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true
});

constructionCrew({
    weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false
});