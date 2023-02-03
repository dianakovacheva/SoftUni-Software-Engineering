function solve() {
  const textAreaInputElement = document.getElementById('input');
  const output = document.getElementById('output');
  let inputTextArray = textAreaInputElement.value.split('.').filter(symbol => symbol !== '')

  while (inputTextArray.length > 0) {
    let paragraph = inputTextArray.splice(0, 3);
    let pElement = document.createElement('p');
    pElement.textContent = `${paragraph.join('. ') + '.'}`;
    output.appendChild(pElement);
  }
}
