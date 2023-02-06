function solve() {
  const btnElements = document.querySelectorAll('button');
  const generateBtn = btnElements[0].addEventListener('click', generate);
  const buyBtn = btnElements[1].addEventListener('click', buy);

  function generate() {
    const currentItems = JSON.parse(document.querySelectorAll('textarea')[0].value);
    const tbodyElement = document.getElementsByTagName('tbody')[0];
    for (let item of currentItems) {
      const trElement = document.createElement('tr');
      trElement.innerHTML =
        `<td><img src = ${item.img}></td>` +
        `<td><p>${item.name}</p></td>` +
        `<td><p>${item.price}</p></td>` +
        `<td><p>${item.decFactor}</p></td>` +
        `<td><input type='checkbox'></td>`;
      tbodyElement.appendChild(trElement);
    }
  }
  let result = [];
  function buy() {
    const resultArea = document.querySelectorAll('textarea')[1];
    const tr = Array.from(document.querySelectorAll('tbody tr'));
    for (const element of tr) {
      if (element.querySelector("input[type='checkbox']:checked")) {
        const elementData = Array.from(element.querySelectorAll('td'));
        let info = {
          name: elementData[1].children[0].textContent,
          price: elementData[2].children[0].textContent,
          decFacror: elementData[3].children[0].textContent,
        };
        result.push(info);
      }
    }
    let productName = '';
    let totalPrice = 0;
    let averageDecFactor = 0;
    for (let i = 0; i < result.length; i++) {
      const item = result[i];
      const separator = i == result.length - 1 ? '' : ', ';
      productName += item.name + separator;
      totalPrice += Number(item.price);
      averageDecFactor += Number(item.decFacror);
    }
    averageDecFactor /= result.length;
    resultArea.value = `Bought furniture: ${productName}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${averageDecFactor}`;
  }
  document.querySelectorAll('textarea')[0].value = ''
  document.querySelectorAll('textarea')[1].value = ''
}