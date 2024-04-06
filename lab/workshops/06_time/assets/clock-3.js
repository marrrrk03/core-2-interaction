// get elements
// --------------------

var hoursHand = document.querySelector('.Hand--hours');
var minutesHand = document.querySelector('.Hand--minutes');
var secondsHand = document.querySelector('.Hand--seconds');

console.log(hoursHand, minutesHand, secondsHand);


// get time
// --------------------

var dateObject = new Date();
var hours = dateObject.getHours();
var minutes = dateObject.getMinutes();
var seconds = dateObject.getSeconds();

console.log(hours, minutes, seconds);


// get rotation
// --------------------

var hoursRotation = ( 360 / 24 ) * hours;
var minutesRotation = ( 360 / 60 ) * minutes;
var secondsRotation = ( 360 / 60 ) * seconds;
console.log(hoursRotation, minutesRotation, secondsRotation);


// changing DOM
// --------------------

hoursHand.style.transform = `rotate(${ hoursRotation }deg)`;
minutesHand.style.transform = `rotate(${ minutesRotation }deg)`;
secondsHand.style.transform = `rotate(${ secondsRotation }deg)`;