var dateObject = new Date();
var year = dateObject.getFullYear();
var month = String(dateObject.getMonth()).padStart(2, '0');
var day = String(dateObject.getDay()).padStart(2, '0');
var URL = `https://api.open-meteo.com/v1/forecast?latitude=40&longitude=75&current=relative_humidity_2m&timezone=America%2FNew_York`;

fetch(URL)
	.then((response) => {
		return response.json();
	})
	.then((data) => {
		console.log(data);
	})

