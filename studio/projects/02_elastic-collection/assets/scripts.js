// put into conatiner element in html
var containerElement = document.querySelector('.treeContainer');


// get random image
console.log(images);
var randomImageFloat = Math.random() * images.length; //length of array as limit
var randomImageIndex = Math.floor(randomImageFloat); //round down
var randomImage = images[randomImageIndex]; //pull from array
console.log(randomImageIndex, randomImage);


// defining insert function with file path parameters
function insertImage(image) {
	containerElement.innerHTML += `
		<img src="/studio/projects/02_elastic-collection/assets/media/${ image }" class="tree">
	`
}


// get random caption
console.log(captions);
var randomCaptionFloat = Math.random() * captions.length; //length of array as limit
var randomCaptionIndex = Math.floor(randomCaptionFloat); //round down
var randomCaption = captions[randomCaptionIndex]; //pull form array
console.log(randomCaptionIndex, randomCaption);


// defining insert function with file path parameters
function insertCaption(caption) {
	containerElement.innerHTML += `
		<p>${ caption }.</p>
	`
}



// run the functions
insertImage(randomImage);
insertCaption(randomCaption);


// things to do:
// 1) run every X seconds with JS setInterval
// 2) add CSS animation
// 3) interaction with JS eventListener