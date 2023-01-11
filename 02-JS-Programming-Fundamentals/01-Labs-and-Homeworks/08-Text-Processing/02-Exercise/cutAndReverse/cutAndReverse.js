function cutAndReverse(string) {

    let stringHalfLength = string.length / 2;
    let firstString = [];
    let secondString = [];

    for (let i = 0; i < stringHalfLength; i++) {
        firstString.push(string[i]);
    }

    for (let j = stringHalfLength; j < string.length; j++) {
        secondString.push(string[j]);
    }

    // Another way to push to the second string
    // for (let j = string.length; j >= stringHalfLength; j--) {
    //     secondString.push(string[j]);
    // }

    console.log(firstString.reverse().join(''));
    console.log(secondString.reverse().join(''));

    // Another way to console.log the second string
    // console.log(secondString.join(''));

}

cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');