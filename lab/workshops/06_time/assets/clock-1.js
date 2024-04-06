// Month and Day Lists
// -----------------------------------------------------------
var monthList = ['jan', 'feb', 'march', 'april', 'may', 'jun', 'july', 'aug', 'sept', 'oct', 'nov', 'dec'];
var dayList = ['sun', 'mon', 'tues', 'wed', 'thurs', 'fri', 'sat'];

// date object
// -----------------------------------
var dateObject = new Date();
console.log('dateObject:', dateObject);

// hours
// -----------------------------------
var hours = dateObject.getHours();
console.log('hours:', hours);

// minutes
// -----------------------------------
var minutes = dateObject.getMinutes();
console.log('minutes:', minutes);

// seconds
// -----------------------------------
var seconds = dateObject.getSeconds();
console.log('seconds:', seconds);

// period
// -----------------------------------
var period = (hours <= 12) ? 'am' : 'pm';
console.log('period:', period);

// year
// -----------------------------------
var year = dateObject.getFullYear();
console.log('year:', year);

// month
// -----------------------------------
var month = monthList[dateObject.getMonth()];
console.log('month:', month);

// day
// -----------------------------------
var day = dayList[dateObject.getDay()];
console.log('day:', day);