let debounceTimer;

document.getElementById("getWeather").addEventListener("click", function(){
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
        getWeatherData();
    }, 800);
});
   
function getWeatherData(){
    let city = document.getElementById("city").value;
    let API_KEY = "034c978b9ddfcb6162b05d1b309ead10"; 
    let endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    fetch(endpoint).then((response)=>{
        if(!response.ok){
            throw new Errow("City not found")
        }
        return response.json();
    }).then((data)=>{
        document.getElementById("city-name").innerText = data.name;
        document.getElementById("temperature").innerText = `${data.main.temp}°C`;
        document.getElementById("humidity").innerText = `${data.main.humidity}%`;

        let rainChance = data.rain ? `${data.rain["1h"]} mm` : "No Rain";
        document.getElementById("rain").innerText = rainChance;
    })

    .catch(error => {
        alert(error.message);
    });
    
}












