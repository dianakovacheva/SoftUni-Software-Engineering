function rectangle(width, height, color) {
    // The first letter in the color must be upperCase()
    const colorFirstLetter = color[0].toUpperCase();
    color = colorFirstLetter + color.slice(1);
    const resultObj = {
        width,
        height,
        color,
        calcArea() {
            return width * height;
        }
    }
    return resultObj;
}

let rect = rectangle(4, 5, 'red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());