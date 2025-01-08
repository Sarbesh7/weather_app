let btn= document.querySelector(".btn");
let cityInput= document.querySelector("#city");
const temp= document.querySelector("#temp-div");


btn.addEventListener("click",async function() {
  let city= cityInput.value
  const Weatherdata =await getWeatherInfo(city)
  // console.log(city)
  const data=Weatherdata.main.temp + "°C";
  temp.innerHTML = data;
  // console.log(Weatherdata.main.temp);
  // temp.innerHTML = city
})


async function getWeatherInfo(city)
{
  const apikey= "7a3ffbf448ad87f45f949a7efe9e44dc";
  const apiurl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`



const response= await fetch(apiurl);
// console.log(response);
const data= await response.json();
return data;
console.log(weatherdata.main);
console.log(city);





}

getWeatherInfo(city)