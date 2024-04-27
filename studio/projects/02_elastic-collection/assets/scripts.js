document.addEventListener("DOMContentLoaded", function () {
    // Get the full-viewport div
    var cover = document.getElementById("cover");

    // Add event listener for click event
    cover.addEventListener("click", function () {
        // Hide the full-viewport div
        cover.style.display = "none";
    });
});

//tap to play audio
document.addEventListener("click", function () {
    document.getElementById("music").play();
});

// find conatiner element in html
var containerElement = document.querySelector(".treeContainer");

function shuffleArray(array) {
    //to randomize array
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

function insertTreeSlide() {
    const nextCaption = captions[currentIndex];
    currentIndex = (currentIndex + 1) % captions.length; // move to the next caption or restart
    const randomImageIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomImageIndex];
    const slide = document.createElement("div");
    slide.classList.add("treeSlide");
    slide.innerHTML = `
		<img src="assets/media/${randomImage}" class="tree" alt="this is a tree">
		<p><span class="brackets">[</span>${nextCaption}<span class="brackets">]</span></p>
=	`;
    containerElement.appendChild(slide);
}

// initial insertion
insertTreeSlide();

// calling function to happen at interval
setInterval(insertTreeSlide, 4000);
