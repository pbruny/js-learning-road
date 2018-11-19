const weather = new Weather('Boston', 'MA');
const ui = new UI();

document.addEventListener('DOMContentLoaded', getWeather);

function getWeather(){
    weather.getWeather()
    .then(results => {
        ui.fillUI(results);
    })
    .catch(err => console.log(err))
}