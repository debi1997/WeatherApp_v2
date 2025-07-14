
const url = 'https://air-quality-by-api-ninjas.p.rapidapi.com/v1/airquality?city=';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8c312f0bccmsh21d681d8cfa2820p134dddjsnfd7954892416',
		'X-RapidAPI-Host': 'air-quality-by-api-ninjas.p.rapidapi.com'
	}
};

const getAQI = (city) => {
  cityName.innerHTML = city;

  fetch(`http://localhost:3000/aqi?city=${encodeURIComponent(city)}`)
    .then(response => response.json())
    .then((result) => {
      // result.data contains the AQI data from your backend
      const response = result.data;
      console.log(response);

      CO.innerHTML = response.CO.aqi;
      NO2.innerHTML = response.NO2.aqi;
      SO2.innerHTML = response.SO2.aqi;
      PM10.innerHTML = response.PM10.aqi;
      OVERALL_AQI.innerHTML = response.overall_aqi;
    })
    .catch(err => console.error(err));
};

submit.addEventListener("click", (e)=>{
e.preventDefault()
getAQI(city.value)
})

getAQI("Delhi")