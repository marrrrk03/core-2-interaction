// find conatiner element in html
var containerElement = document.querySelector('.treeContainer');


// test1 get random caption
// console.log(captions);
// var randomCaptionFloat = Math.random() * captions.length; //length of array as limit
// var randomCaptionIndex = Math.floor(randomCaptionFloat); //round down
// var randomCaption = captions[randomCaptionIndex]; //pull form array
// console.log(randomCaptionIndex, randomCaption);


// // defining insert function with file path parameters
// function insertCaption(caption) {
// 	containerElement.innerHTML = `
// 		<p><span class="brackets">[</span>${ caption }<span class="brackets">]</span></p>
// 	`
// }



// console.log(captions);

// function getRandomCaption() {
//     const randomIndex = Math.floor(Math.random() * captions.length);
//     return captions[randomIndex];
// }


// // defining function with caption
// function insertCaption(caption) {
//     containerElement.innerHTML = `
//         <p><span class="brackets">[</span>${caption}<span class="brackets">]</span></p>
//     `;
// }


function shuffleArray(array) {			//to randomize array
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


// shuffle the captions array
shuffleArray(captions);


// index to keep track of previous displayed captions
let currentIndex = 0;


// get the next caption
function getNextCaption() {
    const nextCaption = captions[currentIndex];
    currentIndex = (currentIndex + 1) % captions.length; // Move to the next caption or loop back to the beginning
    return nextCaption;
}


// insert caption into html element
function insertCaption(caption) {
    containerElement.innerHTML = `
        <p><span class="brackets">[</span>${caption}<span class="brackets">]</span></p>
    `;
}


// initial insertion
insertCaption(getNextCaption());


// calling function to happen at interval
setInterval(function() {
    insertCaption(getNextCaption());
}, 6000);

// // calling insertCaption to start with a random
// insertCaption(getRandomCaption());


// // calling insertCaption to happen at interval
// setInterval(function() {
//     insertCaption(getRandomCaption());
// }, 5000);


// get random image
console.log(images);
var randomImageFloat = Math.random() * images.length; //length of array as limit
var randomImageIndex = Math.floor(randomImageFloat); //round down
var randomImage = images[randomImageIndex]; //pull from array
console.log(randomImageIndex, randomImage);


function getRandomImageIndex() {
    return Math.floor(Math.random() * images.length);
}

// defining insert function with image
function insertImage(image) {
	containerElement.innerHTML += `
		<img src="/studio/projects/02_elastic-collection/assets/media/${ image }" class="tree">
	`;
}


// function to update image
function updateImage() {
    const randomImageIndex = getRandomImageIndex();
    const randomImage = images[randomImageIndex];
    insertImage(randomImage);
}

// initial image update
updateImage();

// calling insertImage to happen at interval
setInterval(updateImage, 6000); 


// run the functions
insertCaption(randomCaption);
insertImage(randomImage);

// things to do:
// 1) run every X seconds with JS setInterval
// 2) add CSS animation
// 3) interaction with JS eventListener