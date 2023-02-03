function attachGradientEvents() {
    const gradientElement = document.getElementById('gradient');
    const resultElement = document.getElementById('result');
    gradientElement.addEventListener('mousemove', onMouseMove);
    // Detect and display how far along a gradient the user has moved their mouse
    function onMouseMove(event) {
        const x = event.offsetX;
        const resultInPercentage = Math.floor(x / 300 * 100);
        resultElement.textContent = resultInPercentage + '%';
    }
}