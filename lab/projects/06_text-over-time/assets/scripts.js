var contents = document.querySelector('.contents');
console.log(contents);

var dateObject = new Date();
var hours = dateObject.getHours();
console.log(hours)

var strokeWidth = ( 100 / 24 ) * hours;

contents.style.webkitTextStrokeWidth = `${strokeWidth}px`;
