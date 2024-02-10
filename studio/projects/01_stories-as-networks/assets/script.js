function goToBottom(){
    const scrollStep = window.innerHeight / 350; //this one is how much it goes each time
    let scrollPosition = 0;
    const scrollInterval = setInterval(function(){
        if (scrollPosition < document.body.scrollHeight){ //if the scroll position is smaller than body
            window.scrollBy(0, scrollStep);
            scrollPosition += scrollStep;
        } else{
            clearInterval(scrollInterval);
        }
    }, 15); // this one is how quickly it goes
}

window.addEventListener('load', function(){ //look out for get to bottom
    goToBottom();
});
