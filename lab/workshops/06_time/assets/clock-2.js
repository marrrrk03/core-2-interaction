// get elements
// -------------------------

var hoursElement = document.querySelector('.Hours');
console.log(hoursElement);

var minutesElement = document.querySelector('.Minutes');
console.log(minutesElement);

var secondsElement = document.querySelector('.Seconds');
console.log(secondsElement);


// every second
// -------------------------
setInterval(() => {

    // get time
    // -------------------------

    var dateObject = new Date();
    var hours = dateObject.getHours();
    var minutes = dateObject.getMinutes();
    var seconds = dateObject.getSeconds();

    console.log(hours, minutes, seconds);


    // update element
    // -------------------------

    hoursElement.innerHTML = hours;
    minutesElement.innerHTML = minutes;
    secondsElement.innerHTML = seconds;
    
}, 1000);