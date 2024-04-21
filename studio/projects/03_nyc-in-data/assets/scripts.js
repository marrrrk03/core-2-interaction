var dateObject = new Date();
var URL = `https://api.open-meteo.com/v1/forecast?latitude=40.7143&longitude=-74.006&current=temperature_2m,relative_humidity_2m&timezone=America%2FNew_York`;


// api things

getTemperature();

setInterval(getTemperature, 60000);

function getTemperature() {
    fetch(URL)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            
            var currentTemp = data.current.temperature_2m;
            console.log(currentTemp);

            document.getElementById('temperature').innerHTML = 'the current temperature is: ' + '<span class="values">' + currentTemp + '</span>' + '°C';
        })
}


// rock formation

$(document).ready(function() {

    setTimeout(function() {
        makeDiv();
    }, 3000);

    function makeDiv() {
        var numRand = Math.floor(Math.random() * 501);
        var divsize = 100;
        var posx = Math.random() * ($(window).width() - divsize);
        var posy = Math.random() * ($(window).height() - divsize);

        var randomIndex = Math.floor(Math.random() * rocks.length);
        var rock = rocks[randomIndex];

        var $newdiv = $("<img src='assets/rockPNGs/" + rock + "' class='tree'></div>").css({
            'left': posx + 'px',
            'top': posy + 'px',
            'filter': 'blur(1px)'
        });

        $newdiv.appendTo('body').delay(1500).fadeIn(0, function() {
            makeDiv();
        });
    }
});
