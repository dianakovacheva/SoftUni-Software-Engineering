function graduation(input) {
    let name = input[0];
    let index = 1;
    let grades = 1;
    let notesSume = 0;
    let excluded = 0;

    while (grades <= 12) {
        let currentNote = Number(input[index]);
        
        if (currentNote >= 4) {
            notesSume += currentNote;
            grades++;
        } else {
            excluded++;
            break;
        }
        index++;
    }

    let averageNote = notesSume / 12;

    if (excluded >= 1) {
        console.log(`${name} has been excluded at ${grades} grade`);
    } else {
        console.log(`${name} graduated. Average grade: ${averageNote.toFixed(2)}`);
    }
}

graduation(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])