const apiKey = "d1b9b5d72eec457b081e6d83eb18facf";

let timer;

// Debouncing Function
function debounceWeather() {
    clearTimeout(timer);

    timer = setTimeout(() => {
        getWeather();
    }, 1000); // waits 1 second
}

// Async/Await Function
async function getWeather() {
    const city = document.getElementById("cityInput").value;

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        // Check city valid or not
        if (data.cod !== 200) {
            alert("City not found!");
            return;
        }

        document.getElementById("city").innerText = data.name;

        document.getElementById("temp").innerText =
            "Temperature: " + data.main.temp + "°C";

        document.getElementById("desc").innerText =
            "Weather: " + data.weather[0].description;

        document.getElementById("humidity").innerText =
            "Humidity: " + data.main.humidity + "%";

        document.getElementById("wind").innerText =
            "Wind Speed: " + data.wind.speed + " m/s";

    } catch (error) {
        alert("Something went wrong!");
    }
}
