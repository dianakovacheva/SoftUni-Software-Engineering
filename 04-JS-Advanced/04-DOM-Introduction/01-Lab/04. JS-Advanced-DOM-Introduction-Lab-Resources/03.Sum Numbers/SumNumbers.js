function calc() {
    const firstNumValue = document.getElementById('num1').value;
    const secondNumValue = document.getElementById('num2').value;
    const sum = Number(firstNumValue) + Number(secondNumValue);
    const inputSumElement = document.getElementById('sum');
    inputSumElement.value = sum;
}
