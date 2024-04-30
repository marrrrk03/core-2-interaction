var dateObject = new Date();
var URL = `https://api.open-meteo.com/v1/forecast?latitude=40.7143&longitude=-74.006&current=temperature_2m,relative_humidity_2m&timezone=America%2FNew_York`;

function getTemperature() {
    fetch(URL)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            var currentTemp = data.current.temperature_2m;
            var currentHumidity = data.current.relative_humidity_2m;

            document.getElementById("temperature").innerHTML =
                "the current temperature is: " +
                '<span class="values">' +
                currentTemp +
                "</span>" +
                "°C";

            setTimeout(function () {
                makeDiv(currentHumidity);
            }, calculateDelay(1000));
        });
}

// getting api info function
getTemperature();

// function calculateDelay(humidity) {
//     // The maximum delay we want is 5000 ms
//     // We can scale the delay linearly from 0 to 100% humidity
//     var maxDelay = 5000;
//     var delay = (humidity / 100) * maxDelay;
//     return delay;
// }

function makeDiv(currentHumidity) {
    console.log(calculateDelay(currentHumidity));
    console.log(currentHumidity);

    var numRand = Math.floor(Math.random() * 501);
    var divsize = 100;
    var posx = Math.random() * (window.innerWidth - divsize);
    var posy = Math.random() * (window.innerHeight - divsize);

    var randomIndex = Math.floor(Math.random() * rocks.length);
    var rock = rocks[randomIndex];

    var imgElement = document.createElement("img");
    imgElement.src = "assets/rockPNGs/" + rock;
    imgElement.classList.add("tree");
    imgElement.style.left = posx + "px";
    imgElement.style.top = posy + "px";

    document.body.appendChild(imgElement);

    setTimeout(function () {
        makeDiv(currentHumidity);
    }, calculateDelay(currentHumidity));
}

function calculateDelay(humidity) {
    var humidityDelays = {
        "0-10": 4500,
        "11-20": 4250,
        "21-30": 4000,
        "31-40": 3500,
        "41-50": 3000,
        "51-60": 2500,
        "61-70": 2000,
        "71-80": 1500,
        "81-90": 1000,
        "91-100": 500,
    };

    if (humidity >= 0 && humidity <= 10) {
        return humidityDelays["0-10"];
    } else if (humidity >= 11 && humidity <= 20) {
        return humidityDelays["11-20"];
    } else if (humidity >= 21 && humidity <= 30) {
        return humidityDelays["21-30"];
    } else if (humidity >= 31 && humidity <= 40) {
        return humidityDelays["31-40"];
    } else if (humidity >= 41 && humidity <= 50) {
        return humidityDelays["41-50"];
    } else if (humidity >= 51 && humidity <= 60) {
        return humidityDelays["51-60"];
    } else if (humidity >= 61 && humidity <= 70) {
        return humidityDelays["61-70"];
    } else if (humidity >= 71 && humidity <= 80) {
        return humidityDelays["71-80"];
    } else if (humidity >= 81 && humidity <= 90) {
        return humidityDelays["81-90"];
    } else {
        return humidityDelays["91-100"];
    }
}
