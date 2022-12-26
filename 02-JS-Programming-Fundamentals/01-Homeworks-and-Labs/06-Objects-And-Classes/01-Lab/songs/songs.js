function songs(arr) {

    class Song {
        constructor(typeList, name, time) {
            this.type = typeList;
            this.songName = name;
            this.songDuration = time;
        }
    }

    let numberOfSongs = arr.shift();

    for (let i = 0; i < numberOfSongs; i++) {
        let splitedSongData = arr[i].split('_');
        let typeListToPrintSong = arr[arr.length - 1];
        let typeList = splitedSongData[0];
        let songName = splitedSongData[1];
        let songDuration = splitedSongData[2];
        let song = new Song(typeList, songName, songDuration);


        if (typeList === typeListToPrintSong) {
            console.log(songName);
        } if (typeListToPrintSong === "all") {
            console.log(songName);
        }
    }
}

songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
);