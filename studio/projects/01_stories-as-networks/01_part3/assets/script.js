function bottom(){
    const scrollStep = window.innerHeight / 350; //how much is each interval (fractiom)
    let scrollPosition = 0; //set initial position to 0
    const scrollInterval = setInterval(function(){ //setting interval to the function
        if (scrollPosition < document.body.scrollHeight){ //if the scroll position is smaller than body
            window.scrollBy(0, scrollStep); //0 for no left + right
            scrollPosition = scrollPosition + scrollStep;
        } else{
            clearInterval(scrollInterval);
        }
    }, 15); //speed of the intervals
}

window.addEventListener('load', function(){ //look out for get to bottom
    bottom();
});
