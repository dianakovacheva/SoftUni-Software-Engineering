function attachEventsListeners() {
    const timeConverterObj = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400,
    }
    // days
    const daysInputElement = document.getElementById('days');
    const daysBtn = document.getElementById('daysBtn');
    // hours
    const hoursInputElement = document.getElementById('hours');
    const hoursBtn = document.getElementById('hoursBtn');
    // minutes
    const minutesInputElement = document.getElementById('minutes');
    const minutesBtn = document.getElementById('minutesBtn');
    // seconds
    const secondsInputElement = document.getElementById('seconds');
    const secondsBtn = document.getElementById('secondsBtn');
    // add event listeners to all buttons
    daysBtn.addEventListener('click', onClick);
    hoursBtn.addEventListener('click', onClick);
    minutesBtn.addEventListener('click', onClick);
    secondsBtn.addEventListener('click', onClick);


    function convertUnits(value, unit) {
        let days = value / timeConverterObj[unit];

        return {
            days: days,
            hours: days * timeConverterObj.hours,
            minutes: days * timeConverterObj.minutes,
            seconds: days * timeConverterObj.seconds,
        }
    }

    function onClick(e) {
        let inputElement = e.target.parentElement.querySelector('input[type="text"]');
        let time = convertUnits(Number(inputElement.value), inputElement.id);
        daysInputElement.value = time.days;
        hoursInputElement.value = time.hours;
        minutesInputElement.value = time.minutes;
        secondsInputElement.value = time.seconds;
    }
}