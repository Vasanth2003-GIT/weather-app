const apiKey = "d1b9b5d72eec457b081e6d83eb18facf";

function getWeather() {
    const city = document.getElementById("cityInput").value;

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById("city").innerText = data.name;
            document.getElementById("temp").innerText = "Temperature: " + data.main.temp + "°C";
            document.getElementById("desc").innerText = "Weather: " + data.weather[0].description;
            document.getElementById("humidity").innerText = "Humidity: " + data.main.humidity + "%";
            document.getElementById("wind").innerText = "Wind Speed: " + data.wind.speed + " m/s";
        })
        .catch(error => {
            alert("City not found!");
        });
}