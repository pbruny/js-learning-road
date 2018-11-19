const weather = new Weather('Boston', 'MA');
const ui = new UI();

document.addEventListener('DOMContentLoaded', getWeather);
document.querySelector('#w-change-btn').addEventListener('click', (e) => {
    const city = document.querySelector('#city').value;
    const state = document.querySelector('#state').value;

    weather.changeLocation(city, state);
    this.getWeather();
    $('#locModal').modal('toggle');
})

function getWeather(){
    weather.getWeather()
    .then(results => {
        ui.fillUI(results);
    })
    .catch(err => console.log(err))
}