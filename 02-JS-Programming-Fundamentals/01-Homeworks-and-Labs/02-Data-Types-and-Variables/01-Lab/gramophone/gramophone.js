function gramophone(bandName, albumName, songName) {

    let songDuration = (albumName.length * bandName.length) * songName.length / 2;
    let numRotations = songDuration / 2.5;

    console.log(`The plate was rotated ${Math.ceil(numRotations)} times.`);
}

gramophone('Rammstein', 'Sehnsucht', 'Engel');