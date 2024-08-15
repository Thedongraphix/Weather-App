const apikey = "89aeaf0b967dfc0548a449623b6f2068";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


async function getWeather(city) {

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        
        
    }


    
    const response = await fetch(apiUrl + city + "&appid=" + apikey);
    const data = await response.json();
    console.log(data);
     
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "kmh";


    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "clouds.png";
    }else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "clear.png";
    }else if(data.weather[0].main == "Rain"){

        weatherIcon.src = "rain.png";
    }else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "snow.png";
    }
    

   document.querySelector(".weather").style.display = "block";
   
}
searchBtn.addEventListener("click", () => {
    getWeather(searchBox.value);
});

