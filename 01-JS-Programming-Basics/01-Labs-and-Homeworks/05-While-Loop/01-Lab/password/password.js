function password(input) {

    let username = input[0];
    let myPassword = input[1];

    let enteredPassword = input[2];

    let index = 3;

    while (enteredPassword !== myPassword) {
        enteredPassword = input[index];
        index++;
    }
    console.log(`Welcome ${username}!`);
}

password(["Nakov",
"1234",
"Pass",
"1324",
"1234"])
