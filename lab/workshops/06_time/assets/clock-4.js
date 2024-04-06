var dateObject = new Date();
console.log('dateObject:', dateObject);

var year = dateObject.getFullYear();
console.log('year:', year);

var yearElement = document.querySelector('.year');
console.log(yearElement);

yearElement.innerHTML = year;