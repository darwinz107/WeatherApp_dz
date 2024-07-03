let api_key = 'd536357cf1ef4fb2de4b70793c2e1d74'
cityName = "Guayaquil";
let difKelvin = 273.15;
let urlBase= 'https://api.openweathermap.org/data/2.5/weather'



document.getElementById('buttonSearch').addEventListener('click', () =>{
const city = document.getElementById('inputWeather').value 
if(city){

      fetchWeatherData(city);
}

});

function fetchWeatherData(city){

fetch(`${urlBase}?q=${city}&appid=${api_key}`)
.then(data => data.json())
.then(data => mostarDatosClima(data));

}
function mostarDatosClima(data){

      console.log(data);
      const valWeatherData = document.getElementById('weatherData');
      valWeatherData.innerHTML = '';
const cityName = data.name;
const country = data.sys.country;
const weather = data.weather[0].description;
const humidity = data.main.humidity;
const temp = data.main.temp;
const icon = data.weather[0].icon;

const cityTitle = document.createElement('h2');
cityTitle.textContent= `${cityName}, ${country}`;

const paragrahWeather = document.createElement('p');
paragrahWeather.textContent = `The ${cityName} weather has ${weather}`

const paragrahHumidity = document.createElement('p');
paragrahHumidity.textContent = `The ${cityName} humidity is: ${humidity}`

const paragrahTemp = document.createElement('p')
paragrahTemp.textContent = `The ${cityName} temp is: ${Math.floor(temp-difKelvin)} °C`

const paragrahCountry = document.createElement('p');
paragrahCountry.textContent = `The country of the city ${cityName} is: ${country}`;

const iconImage = document.createElement('img');
iconImage.src = `https://openweathermap.org/img/wn/${icon}@2x.png`


valWeatherData.appendChild(cityTitle);
valWeatherData.appendChild(paragrahWeather);
valWeatherData.appendChild(paragrahHumidity);
valWeatherData.appendChild(paragrahTemp);
valWeatherData.appendChild(paragrahCountry);
valWeatherData.appendChild(iconImage);


}


























//  Valido('Funciona');


// function Valido(parametro){

// parametro += ' xd'
// valido2 = parametro;

//     return valido2;
// }


// try{
   
// console.log(valido2);
// setTimeout(()=>{
// console.log('xddddxddddd')

// },1000);
// // throw('Te hackearon :c');
// }catch{

// console.log(':-c')

// }finally{
// console.log('You are the best')
// }

// let requestBody ={
// title: 'Hola',
// body:'Loquesea que se me venga a la mente',
// userId: 1,

// }
// let ruta = 'https://jsonplaceholder.typicode.com';
// let posteo = 20;
// let elementoEliminar = 9;
// let requestBody2 ={
//       title: 'Yummy yummy love'
      
//       }



// let query ='/posts'
// fetch(`${ruta}/posts/${elementoEliminar}`,{
// method:'PATCH',
// headers:{
//       'Content-type': 'application/json; charset=UTF-8'
// },
// body: JSON.stringify(requestBody2)



// })
//       .then(response => response.json())
//       .then(json => console.log(json))

// fetch(`${ruta}/posts/${elementoEliminar}`,{

//       method:'DELETE'
// })



