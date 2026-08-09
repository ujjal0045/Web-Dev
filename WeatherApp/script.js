const btn = document.querySelector('#searchBtn');


async function getWeatherInfo(url) {
  let res = await axios.get(url);
  return res.data;
}

btn.addEventListener("click", async ()=>{
    document.querySelector(".weather-result").style.display = "block";
    let  nameOfPlace = document.querySelector('#cityInput').value;
  const url = `https://wttr.in/${nameOfPlace}?format=j1`;

  const data = await getWeatherInfo(url)
  console.log(data);
  displayResult(data);

});




function displayResult(res){
  let weatherResult = document.querySelector(".weather-result");
  const current  = res.current_condition[0];
  const location = res.nearest_area;
  weatherResult.innerHTML = `
    <div class="weather-header">

                      <div class="weather-info">

                          <p class="location-title">Now in</p>

                          <h2 class="city-name">${location[0].areaName[0].value}, ${location[0].country[0].value}</h2>

                          <p class="weather-status">
                              ${current.weatherDesc[0].value}
                          </p>

                      </div>

                      <div class="temperature">

                          <h1>${current.temp_C}<sup>°</sup>  </h1>

                      </div>

                  </div>

                  <div class="weather-details">

                      <!-- Card 1 -->
                      <div class="detail-card">
                          <p><i class="fa-solid fa-temperature-half"></i> Feels like</p>
                          <h3>${current.FeelsLikeC}°C</h3>
                      </div>

                      <!-- Card 2 -->
                      <div class="detail-card">
                          <p><i class="fa-solid fa-droplet"></i> Humidity</p>
                          <h3>${current.humidity}%</h3>
                      </div>

                      <!-- Card 3 -->
                      <div class="detail-card">
                          <p><i class="fa-solid fa-wind"></i> Wind</p>
                          <h3>${current.windspeedKmph} km/h</h3>
                      </div>

                      <!-- Card 4 -->
                      <div class="detail-card">
                          <p><i class="fa-solid fa-cloud"></i> Clouds</p>
                          <h3>${current.cloudcover}%</h3>
                      </div>

                      <!-- Card 5 -->
                      <div class="detail-card">
                          <p><i class="fa-solid fa-eye"></i> Visibility</p>
                          <h3>${current.visibility} km</h3>
                      </div>

                      <!-- Card 6 -->
                      <div class="detail-card">
                          <p><i class="fa-regular fa-clock"></i> Updated</p>
                          <h3>${current.observation_time}</h3>
                      </div>

                  </div>
  `
}