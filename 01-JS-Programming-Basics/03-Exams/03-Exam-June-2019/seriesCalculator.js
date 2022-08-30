function seriesCalculator(input) {
    let movieName = input[0];
    let seasonsCount = Number(input[1]);
    let episodesCount = Number(input[2]);
    let episodesDurationsWithoutAdvertisment = Number(input[3]);

    let advertismentDurationPerEpisode = episodesDurationsWithoutAdvertisment * 0.20;
    let episodesDurationsWithAdvertisment = episodesDurationsWithoutAdvertisment + advertismentDurationPerEpisode;
    let specialEpisodeDuration = seasonsCount * 10;
    let totalTimeNeededToWatchTheMovie = episodesDurationsWithAdvertisment * episodesCount
        * seasonsCount + specialEpisodeDuration;

    console.log(`Total time needed to watch the ${movieName} series is ${Math.floor(totalTimeNeededToWatchTheMovie)} minutes.`);
}

seriesCalculator(["Riverdale",
    "3",
    "21",
    "45"])


