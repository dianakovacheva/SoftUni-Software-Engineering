function sleepyTomCat(input) {
    let maximumMinutesPlayingTimePerYear = 30000;
    let playingTimePerDayAfterWork = 63.00;
    let playingTimePerDayWhenFree = 127.00;
    let freeDaysCount = Number(input[0]);

    let workingDaysCount = 365 - freeDaysCount;
    let totalPlayingTimePerYear = workingDaysCount * playingTimePerDayAfterWork
        + freeDaysCount * playingTimePerDayWhenFree;

    let diff = Math.abs(maximumMinutesPlayingTimePerYear - totalPlayingTimePerYear);
    let diffInHours = Math.floor(diff / 60);
    let diffInMinutes = diff % 60;

    if (totalPlayingTimePerYear > maximumMinutesPlayingTimePerYear) {
        console.log("Tom will run away");
        console.log(`${diffInHours} hours and ${diffInMinutes} minutes more for play`);
    } else if (totalPlayingTimePerYear <= maximumMinutesPlayingTimePerYear) {
        console.log("Tom sleeps well");
        console.log(`${diffInHours} hours and ${diffInMinutes} minutes less for play`);
    }
}

sleepyTomCat(["113"]);