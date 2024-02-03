var myData;
var temp = document.querySelector("#temp")
// console.log(day);
// console.log(temp);


async function gewWeather(cityName){
    var myResponse = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=ff07c6b896b04555aef203055240302&q=${cityName}&days=3`);
    
    myData = await myResponse.json();
    console.log(myData);
    for (var i = 0; i < 3; i++) {

var day = document.querySelectorAll('.day')[i]
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var d = new Date(myData.forecast.forecastday[i].date);
    var dayName = days[d.getDay()];
    day.innerHTML=dayName

///////////////////////////get max temp start///////////////////

var maxTemp = document.querySelectorAll(".temp")[i]
maxTemp.innerHTML = myData.forecast.forecastday[i].day.maxtemp_c
///////////////////////////get max temp start///////////////////

///////////////////////////get condition start///////////////////
var condition = document.querySelectorAll('.condition')[i]
condition.innerHTML=myData.forecast.forecastday[i].day.condition.text
///////////////////////////get condition end///////////////////

//  get condition icon start
var conditionIcon = document.querySelectorAll(".image")[i]
console.log(conditionIcon);
conditionIcon.setAttribute('src',myData.forecast.forecastday[i].day.condition.icon)
// get condition icon end 

// get wind start
var wind = document.querySelectorAll(".wind")[i]
wind.innerHTML=myData.forecast.forecastday[i].day.maxwind_kph

///////////////////////////get min temp start///////////////////
var minTemp = document.querySelectorAll(".minTemp")[i]
minTemp.innerHTML = myData.forecast.forecastday[i].day.mintemp_c
///////////////////////////get min temp start///////////////////

///////////////////////////get location start///////////////////
var location = document.querySelectorAll(".location")[i]
location.innerHTML = myData.location.region
///////////////////////////get location start///////////////////

///////////////////////////get chance of rain start///////////////////
var chanceRain = document.querySelectorAll(".chanceRain")[i]
chanceRain.innerHTML = myData.forecast.forecastday[i].day.daily_chance_of_rain
///////////////////////////get chance of rain end///////////////////

}

}
gewWeather('cairo')


function getCity(){
    var searchBar = document.getElementById("searchBar").value
    gewWeather(searchBar);
document.getElementById("cardss").classList.remove("d-none")
    
    // alert(searchBar.value)
}

