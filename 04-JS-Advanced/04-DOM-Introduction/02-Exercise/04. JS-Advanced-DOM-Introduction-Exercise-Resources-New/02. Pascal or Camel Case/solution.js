function solve(textToModify, textType) {
  // Get the value of the input element and convert all the letters to lowercase
  const inputElementValue = document.getElementById('text').value.toLowerCase();
  const convetionInputElementValue = document.getElementById('naming-convention').value;
  const resultElement = document.getElementById('result');
  // To be able to loop through the input text, first split it by empty space
  const splittedText = inputElementValue.split(' ');
  // Store the modified text in resultArray
  let resultArray = [];
  switch (convetionInputElementValue) {
    case 'Camel Case':
      // thisIsAnExample
      resultArray = [splittedText[0]];
      for (let i = 1; i < splittedText.length; i++) {
        // Change the first letter of all words to uppercase
        const currentWordFirstLetter = splittedText[i][0].toUpperCase();
        // Push the first uppercase letter of the word and it's rest to the resultArray
        resultArray.push(currentWordFirstLetter + splittedText[i].slice(1));
      }
      break;
    case 'Pascal Case':
      splittedText.forEach(word => {
        const firstLetter = word[0].toUpperCase();
        resultArray.push(firstLetter + word.slice(1));
      });
      break;
    default:
      // If the convention's value is neither "Camel Case" nor "Pascal Case", the result should be "Error!"
      resultArray.push('Error!');
  }
  resultElement.textContent = resultArray.join('');
}

solve("this is an example", "Camel Case");
// thisIsAnExample
solve("secOND eXamPLE", "Pascal Case");
// SecondExample
solve("Invalid Input", "Another Case");
// Error!