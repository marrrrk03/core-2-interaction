var dateObject = new Date();
var URL = `https://api.open-meteo.com/v1/forecast?latitude=40.7143&longitude=-74.006&current=temperature_2m,relative_humidity_2m&timezone=America%2FNew_York`;

// getting api info function
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
      var currentHumidity = data.current.relative_humidity_2m;

      console.log(currentTemp);
      console.log(currentHumidity);

      document.getElementById("temperature").innerHTML =
        "the current temperature is: " +
        '<span class="values">' +
        currentTemp +
        "</span>" +
        "°C";

      setTimeout(function () {
        makeDiv(currentHumidity);
      }, calculateDelay(currentHumidity));
    });
}

// function calculateDelay(humidity) {
//     // The maximum delay we want is 5000 ms
//     // We can scale the delay linearly from 0 to 100% humidity
//     var maxDelay = 5000;
//     var delay = (humidity / 100) * maxDelay;
//     return delay;
// }

function calculateDelay(humidity) {
  var humidityDelays = {
    "0-10": 10000,
    "11-20": 9000,
    "21-30": 8000,
    "31-40": 7000,
    "41-50": 6000,
    "51-60": 5000,
    "61-70": 4000,
    "71-80": 3000,
    "81-90": 2000,
    "91-100": 1000,
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

$(document).ready(function () {
  function makeDiv(currentHumidity) {
    var numRand = Math.floor(Math.random() * 501);
    var divsize = 100;
    var posx = Math.random() * ($(window).width() - divsize);
    var posy = Math.random() * ($(window).height() - divsize);

    var randomIndex = Math.floor(Math.random() * rocks.length);
    var rock = rocks[randomIndex];

    var $newdiv = $(
      "<img src='assets/rockPNGs/" + rock + "' class='tree'></div>"
    ).css({
      left: posx + "px",
      top: posy + "px",
      filter: "blur(1px)",
    });

    $newdiv
      .appendTo("body")
      .delay(calculateDelay(currentHumidity))
      .fadeIn(0, function () {
        makeDiv(currentHumidity);
      });
  }

  setTimeout(function () {
    makeDiv();
  }, 3000);
});
