"strict mode";

// Do a CORS request to get Davis weather hourly forecast

// Create the XHR object.
function createCORSRequest(method, url) {
  let xhr = new XMLHttpRequest();
  xhr.open(method, url, true);  // call its open method
  return xhr;
}

// Make the actual CORS request.

function makeCorsRequest() {
  let searchInput = document.getElementById("searchtxt");
  let input = "";
  if (searchInput.value == "") {
    input = "Davis,CA,US";
  } else {
    input = searchInput.value;
  }
let url = "http://api.openweathermap.org/data/2.5/forecast/hourly?q=" + input + "&units=imperial&APPID=df9019acb167004a5c44f2bb777e9b2b"
let xhr = createCORSRequest('GET', url);

  // checking if browser does CORS
  if (!xhr) {
    alert('CORS not supported');
    return;
  }

  // Load some functions into response handlers.
  xhr.onload = function() {

      let responseStr = xhr.responseText;  // get the JSON string
      let object = JSON.parse(responseStr);  // turn it into an object
      if (object.city.coord.lon > "-121.351" || object.city.coord.lon < "-123.279") {
        xhr.onerror = alert("Not Found");
        return;
      }
      if (object.city.coord.lat > "40.831" || object.city.coord.lat < "36.426") {
        xhr.onerror = alert("Not Found");
        return;
      }

      let test = document.getElementById("temperature");
      test.textContent = Math.round(object.list[0].main.temp) + "°";
      let test2 = document.getElementById("time");
      var dt = new Date();
      if (dt.getHours() > 12) {
        test2.textContent = (dt.getHours() - 12) + "pm";
      } else {
        if (dt.getHours() == 0) {
          test2.textContent = (dt.getHours() + 12) + "am";
        } else {
          test2.textContent = dt.getHours() + "am";
        }
      }
      var img = document.getElementById("image");

        if (object.list[0].weather[0].icon === "01n") {
          img.src = "./assets/clear-night.svg";
        }
        if (object.list[0].weather[0].icon === "01d") {
          img.src = "./assets/clearsky.svg";
        }

        if (object.list[0].weather[0].icon === "02n") {
          img.src = "./assets/fewclouds-night.svg";
        }
        if (object.list[0].weather[0].icon === "02d") {
          img.src = "./assets/fewclouds-day.svg";
        }

      if (object.list[0].weather[0].icon === "03d" || object.list[0].weather[0].icon === "03n") {
        img.src = "./assets/scatteredclouds.svg";
      }
      if (object.list[0].weather[0].icon === "04d" || object.list[0].weather[0].icon === "04n") {
        img.src = "./assets/brokencloud.svg";
      }
      if (object.list[0].weather[0].icon === "09d" || object.list[0].weather[0].icon === "09n") {
        img.src = "./assets/showerrain.svg";
      }
        if (object.list[0].weather[0].icon === "10n") {
          img.src = "./assets/rain-night.svg";
        }
        if (object.list[0].weather[0].icon === "10d") {
        img.src = "./assets/rain-day.svg";
        }
      if (object.list[0].weather[0].icon === "11d" || object.list[0].weather[0].icon === "11n") {
        img.src = "./assets/thunderstorms.svg";
      }
      if (object.list[0].weather[0].icon === "13d" || object.list[0].weather[0].icon === "13n") {
        img.src = "./assets/snow.svg";
      }
      if (object.list[0].weather[0].icon === "50d" || object.list[0].weather[0].icon === "50n") {
        img.src = "./assets/mist.svg";
      }
//-------------------first hour------------------
      let ftime = document.getElementById("firsttime");
      if (dt.getHours() + 1 > 12) {
        ftime.textContent = (dt.getHours() + 1 - 12) + ":00 pm";
      } else {
        ftime.textContent = (dt.getHours() + 1) + ":00 am";
      }

      let first = document.getElementById("firsttemp");
      first.textContent = Math.round(object.list[1].main.temp) + "°";

      var fimg = document.getElementById("firstimage");
      if (object.list[1].weather[0].icon === "01n") {
        fimg.src = "./assets/clear-night.svg";
      }
      if (object.list[1].weather[0].icon === "01d") {
        fimg.src = "./assets/clearsky.svg";
      }

      if (object.list[1].weather[0].icon === "02n") {
        fimg.src = "./assets/fewclouds-night.svg";
      }
      if (object.list[1].weather[0].icon === "02d") {
        fimg.src = "./assets/fewclouds-day.svg";
      }

    if (object.list[1].weather[0].icon === "03d" || object.list[1].weather[0].icon === "03n") {
      fimg.src = "./assets/scatteredclouds.svg";
    }
    if (object.list[1].weather[0].icon === "04d" || object.list[1].weather[0].icon === "04n") {
      fimg.src = "./assets/brokencloud.svg";
    }
    if (object.list[1].weather[0].icon === "09d" || object.list[1].weather[0].icon === "09n") {
      fimg.src = "./assets/showerrain.svg";
    }
      if (object.list[1].weather[0].icon === "10n") {
        fimg.src = "./assets/rain-night.svg";
      }
      if (object.list[1].weather[0].icon === "10d") {
      fimg.src = "./assets/rain-day.svg";
      }
    if (object.list[1].weather[0].icon === "11d" || object.list[1].weather[0].icon === "11n") {
      fimg.src = "./assets/thunderstorms.svg";
    }
    if (object.list[1].weather[0].icon === "13d" || object.list[1].weather[0].icon === "13n") {
      fimg.src = "./assets/snow.svg";
    }
    if (object.list[1].weather[0].icon === "50d" || object.list[1].weather[0].icon === "50n") {
      fimg.src = "./assets/mist.svg";
    }

//-------------------2nd hour------------------
let stime = document.getElementById("secondtime");
      var time2 = dt.getHours() + 2;
      if (time2 > 12) {
        stime.textContent = (time2 - 12) + ":00 pm";
      } else {
        stime.textContent = time2 + ":00 am";
      }

      let second = document.getElementById("secondtemp");
      second.textContent = Math.round(object.list[2].main.temp) + "°";

      var simg = document.getElementById("secondimage");
      if (object.list[2].weather[0].icon === "01n") {
        simg.src = "./assets/clear-night.svg";
      }
      if (object.list[2].weather[0].icon === "01d") {
        simg.src = "./assets/clearsky.svg";
      }

      if (object.list[2].weather[0].icon === "02n") {
        simg.src = "./assets/fewclouds-night.svg";
      }
      if (object.list[2].weather[0].icon === "02d") {
        simg.src = "./assets/fewclouds-day.svg";
      }

    if (object.list[2].weather[0].icon === "03d" || object.list[2].weather[0].icon === "03n") {
      simg.src = "./assets/scatteredclouds.svg";
    }
    if (object.list[2].weather[0].icon === "04d" || object.list[2].weather[0].icon === "04n") {
      simg.src = "./assets/brokencloud.svg";
    }
    if (object.list[2].weather[0].icon === "09d" || object.list[2].weather[0].icon === "09n") {
      simg.src = "./assets/showerrain.svg";
    }
      if (object.list[2].weather[0].icon === "10n") {
        simg.src = "./assets/rain-night.svg";
      }
      if (object.list[2].weather[0].icon === "10d") {
      simg.src = "./assets/rain-day.svg";
      }
    if (object.list[2].weather[0].icon === "11d" || object.list[2].weather[0].icon === "11n") {
      simg.src = "./assets/thunderstorms.svg";
    }
    if (object.list[2].weather[0].icon === "13d" || object.list[2].weather[0].icon === "13n") {
      simg.src = "./assets/snow.svg";
    }
    if (object.list[2].weather[0].icon === "50d" || object.list[2].weather[0].icon === "50n") {
      simg.src = "./assets/mist.svg";
    }

//-------------------3rd hour------------------
let tritime = document.getElementById("ttime");
var time3 = dt.getHours() + 3;
if (time3 > 12) {
  tritime.textContent = (time3 - 12) + ":00 pm";
} else {
  tritime.textContent = time3 + ":00 am";
}

let third = document.getElementById("ttemp");
third.textContent = Math.round(object.list[3].main.temp) + "°";

      var timg = document.getElementById("timage");
      if (object.list[3].weather[0].icon === "01n") {
        timg.src = "./assets/clear-night.svg";
      }
      if (object.list[3].weather[0].icon === "01d") {
        timg.src = "./assets/clearsky.svg";
      }

      if (object.list[3].weather[0].icon === "02n") {
        timg.src = "./assets/fewclouds-night.svg";
      }
      if (object.list[3].weather[0].icon === "02d") {
        timg.src = "./assets/fewclouds-day.svg";
      }

    if (object.list[3].weather[0].icon === "03d" || object.list[3].weather[0].icon === "03n") {
      timg.src = "./assets/scatteredclouds.svg";
    }
    if (object.list[3].weather[0].icon === "04d" || object.list[3].weather[0].icon === "04n") {
      timg.src = "./assets/brokencloud.svg";
    }
    if (object.list[3].weather[0].icon === "09d" || object.list[3].weather[0].icon === "09n") {
      timg.src = "./assets/showerrain.svg";
    }
      if (object.list[3].weather[0].icon === "10n") {
        timg.src = "./assets/rain-night.svg";
      }
      if (object.list[3].weather[0].icon === "10d") {
      timg.src = "./assets/rain-day.svg";
      }
    if (object.list[3].weather[0].icon === "11d" || object.list[3].weather[0].icon === "11n") {
      timg.src = "./assets/thunderstorms.svg";
    }
    if (object.list[3].weather[0].icon === "13d" || object.list[3].weather[0].icon === "13n") {
      timg.src = "./assets/snow.svg";
    }
    if (object.list[3].weather[0].icon === "50d" || object.list[3].weather[0].icon === "50n") {
      timg.src = "./assets/mist.svg";
    }

//-------------------4th hour------------------
let fourtime = document.getElementById("ftime");
var time4 = dt.getHours() + 4;
if (time4 > 12) {
  fourtime.textContent = (time4 - 12) + ":00 pm";
} else {
  fourtime.textContent = time4 + ":00 am";
}

let fourth = document.getElementById("ftemp");
fourth.textContent = Math.round(object.list[4].main.temp) + "°";

      var fourimg = document.getElementById("fimage");
      if (object.list[4].weather[0].icon === "01n") {
        fourimg.src = "./assets/clear-night.svg";
      }
      if (object.list[4].weather[0].icon === "01d") {
        fourimg.src = "./assets/clearsky.svg";
      }

      if (object.list[4].weather[0].icon === "02n") {
        fourimg.src = "./assets/fewclouds-night.svg";
      }
      if (object.list[4].weather[0].icon === "02d") {
        fourimg.src = "./assets/fewclouds-day.svg";
      }

    if (object.list[4].weather[0].icon === "03d" || object.list[4].weather[0].icon === "03n") {
      fourimg.src = "./assets/scatteredclouds.svg";
    }
    if (object.list[4].weather[0].icon === "04d" || object.list[4].weather[0].icon === "04n") {
      fourimg.src = "./assets/brokencloud.svg";
    }
    if (object.list[4].weather[0].icon === "09d" || object.list[4].weather[0].icon === "09n") {
      fourimg.src = "./assets/showerrain.svg";
    }
      if (object.list[4].weather[0].icon === "10n") {
        fourimg.src = "./assets/rain-night.svg";
      }
      if (object.list[4].weather[0].icon === "10d") {
      fourimg.src = "./assets/rain-day.svg";
      }
    if (object.list[4].weather[0].icon === "11d" || object.list[4].weather[0].icon === "11n") {
      fourimg.src = "./assets/thunderstorms.svg";
    }
    if (object.list[4].weather[0].icon === "13d" || object.list[4].weather[0].icon === "13n") {
      fourimg.src = "./assets/snow.svg";
    }
    if (object.list[4].weather[0].icon === "50d" || object.list[4].weather[0].icon === "50n") {
      fourimg.src = "./assets/mist.svg";
    }

//-------------------5th hour------------------
let fivetime = document.getElementById("fiftime");
var time5 = dt.getHours() + 5;
if (time5 > 12) {
  fivetime.textContent = (time5 - 12) + ":00 pm";
} else {
  fivetime.textContent = time5 + ":00 am";
}

let fifth = document.getElementById("fiftemp");
fifth.textContent = Math.round(object.list[5].main.temp) + "°";

      var fifimg = document.getElementById("fifimage");
      if (object.list[5].weather[0].icon === "01n") {
        fifimg.src = "./assets/clear-night.svg";
      }
      if (object.list[5].weather[0].icon === "01d") {
        fifimg.src = "./assets/clearsky.svg";
      }

      if (object.list[5].weather[0].icon === "02n") {
        fifimg.src = "./assets/fewclouds-night.svg";
      }
      if (object.list[5].weather[0].icon === "02d") {
        fifimg.src = "./assets/fewclouds-day.svg";
      }

    if (object.list[5].weather[0].icon === "03d" || object.list[5].weather[0].icon === "03n") {
      fifimg.src = "./assets/scatteredclouds.svg";
    }
    if (object.list[5].weather[0].icon === "04d" || object.list[5].weather[0].icon === "04n") {
      fifimg.src = "./assets/brokencloud.svg";
    }
    if (object.list[5].weather[0].icon === "09d" || object.list[5].weather[0].icon === "09n") {
      fifimg.src = "./assets/showerrain.svg";
    }
      if (object.list[5].weather[0].icon === "10n") {
        fifimg.src = "./assets/rain-night.svg";
      }
      if (object.list[5].weather[0].icon === "10d") {
      fifimg.src = "./assets/rain-day.svg";
      }
    if (object.list[5].weather[0].icon === "11d" || object.list[5].weather[0].icon === "11n") {
      fifimg.src = "./assets/thunderstorms.svg";
    }
    if (object.list[5].weather[0].icon === "13d" || object.list[5].weather[0].icon === "13n") {
      fifimg.src = "./assets/snow.svg";
    }
    if (object.list[5].weather[0].icon === "50d" || object.list[5].weather[0].icon === "50n") {
      fifimg.src = "./assets/mist.svg";
    }
};

  xhr.onerror = function() {
    alert('Woops, there was an error making the request.');
  };

  // Actually send request to server
  xhr.send();
}

// run this code to make request when this script file gets executed
makeCorsRequest();


let imageArray = []  // global variable to hold stack of images for animation
let count = 0;          // global vars
let img = document.getElementById("colors");
var image = document.createElement('img');
var num = 0;

function addToArray(newImage) {
	if (count < 10) {
		newImage.id = "doppler_"+count;
		newImage.style.display = "none";
		imageArray.push(newImage);
    count = count+1;
		if (count >= 10) {
      console.log("got 10 images");
    }
  }
  image = imageArray[num];
  colors.appendChild(image)
  image.style.display = "inline";
    image.style.height = "auto";
    image.style.width = "auto";
    image.style.maxWidth = "100%";
num = 1;
  function slideShow() {
    if(num != imageArray.length) {
      image = imageArray[num];
      colors.appendChild(image);
      num++;
    }else{
      num = 0;
    }

    image.style.display = "inline";
    image.style.height = "auto";
    image.style.width = "auto";
    image.style.maxWidth = "100%";
  }
setInterval(slideShow,15000)
}


function tryToGetImage(dateObj) {
	let dateStr = dateObj.getUTCFullYear();
	dateStr += String(dateObj.getUTCMonth() + 1).padStart(2, '0'); //January is 0!
	dateStr += String(dateObj.getUTCDate()).padStart(2, '0');

	let timeStr = String(dateObj.getUTCHours()).padStart(2,'0')
	timeStr += String(dateObj.getUTCMinutes()).padStart(2,'0');

	let filename = "DAX_"+dateStr+"_"+timeStr+"_N0R.gif";
	let newImage = new Image();
	newImage.onload = function () {
		// console.log("got image "+filename);
    addToArray(newImage);
	}
	newImage.onerror = function() {
		// console.log("failed to load "+filename);
	}
	newImage.src = "http://radar.weather.gov/ridge/RadarImg/N0R/DAX/"+filename;
}


function getTenImages() {
	let dateObj = new Date();  // defaults to current date and time
	// if we try 150 images, and get one out of every 10, we should get enough
	for (let i = 0; i < 150; i++) {
		newImage = tryToGetImage(dateObj);
    dateObj.setMinutes( dateObj.getMinutes()-1 ); // back in time one minute
  }
}

getTenImages();

function slideUp(){
    button = document.getElementById('Lower');
    button.classList.add('displayClick');
  }
