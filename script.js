function viewWeather() {
  let city = document.querySelector(".city-name").value;
  console.log(city);

  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=072cca524a01295f366ead2220b9c174`)
    .then(function (response) { return response.json() })
    .then(function (data) {
      console.log(data);

      document.querySelector('.temperature').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
      document.querySelector('.clouds').textContent = data.weather[0]['description'];

      document.querySelector('.icon li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
    })
    .catch(function () {


    });
}

document.querySelector(".btn").onclick = viewWeather;