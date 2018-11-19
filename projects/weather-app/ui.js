class UI {
    constructor(){
        this.location = document.querySelector('#w-location');
        this.description = document.querySelector('#w-desc');
        this.string = document.querySelector('#w-string');
        this.icon = document.querySelector('#w-icon');
        this.details = document.querySelector('#w-details');
        this.humidity = document.querySelector('#w-humidity');
        this.dewpoint = document.querySelector('#w-dewpoint');
        this.feelsLike = document.querySelector('#w-feels-like');
        this.wind = document.querySelector('#w-wind');
    }

    fillUI(weather){
        this.location.textContent = weather.display_location.full;
        this.description.textContent = weather.weather;
        this.string.textContent = weather.temperature_string;
        this.icon.setAttribute('src', weather.icon_url);
        this.humidity.textContent = `Relative humidity: ${weather.relative_humidity}`;
        this.dewpoint.textContent = `Dewpoint: ${weather.dewpoint_string}`
        this.feelsLike.textContent = `Feels like: ${weather.feelslike_string}`;
        this.wind.textContent = `Wind:  ${weather.wind_string}`;

    }
}