
function findCity()
{
    let input = document.createElement('input');
    input.placeholder = "Enter a city name.";
    input.name = "weatherInfo";
    input.classList.add("list");
    document.body.appendChild(input);
}
findCity()

function aButton()
{
    let button = document.createElement('button');
    button.innerText = "Submit";
    button.classList.add("list", "btn", "btn-primary");
    button.addEventListener("click", (event) => handleSubmit(event));
    document.body.appendChild(button);
}

aButton()

function handleSubmit(event)
{
    event.stopPropagation();
    event.preventDefault();
    console.log("Submission successful");
    const weatherInfo = document.getElementsByName("weatherInfo")[0].value
    APICall(weatherInfo);
}

async function APICall(cityName)
{
    let result = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=f986638e2b395003360d444c0e5575d4`
    )

    result = result.data

    let high = document.getElementById("high")
    high.innerText = `High: ${tempConvert(result["main"]["temp_max"])}F`
    document.body.appendChild(high)

    let low = document.getElementById("low")
    low.innerText = `low: ${tempConvert(result["main"]["temp_min"])}F`
    document.body.appendChild(low)

    let forecast = document.getElementById("forecast")
    forecast.innerText = `forecast: ${result["weather"]["0"]["description"]}`
    document.body.appendChild(forecast)

    let humidity = document.getElementById("humidity")
    humidity.innerText = `humidity: ${result["main"]["humidity"]}%`
    document.body.appendChild(humidity)
}

function tempConvert(num)
{
    return Math.ceil((num - 273.15) * (9/5) + 32)
}