const weather = new Weather('Boston', 'MA');
const ui = new UI();

weather.changeLocation('San Francisco', 'CA');

document.addEventListener('DOMContentLoaded', getWeather);

function getWeather(){
    weather.getWeather()
    .then(results => {
        
        
    })
    .catch(err => console.log(err))
}