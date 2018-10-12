const celciusInput = document.querySelector('#celcius > input');
const fahrenheitInput = document.querySelector('#fahrenheit > input');
const kelvinInput = document.querySelector('#kelvin > input');

function roundNumTwoDigits(num){
    return Math.round(num*100)/100;
}

function cToFahAndKel(){
    const cTemp = parseFloat(celciusInput.value);
    const fTemp = (cTemp * (9/5)) + 32;
    const kTemp = cTemp + 273.15;
    fahrenheitInput.value = roundNumTwoDigits(fTemp);
    kelvinInput.value = roundNumTwoDigits(kTemp);
}

function fToCelAndKel(){
    const fTemp = parseFloat(fahrenheitInput.value);
    const cTemp = (fTemp - 32) * (5/9);
    const kTemp = (fTemp + 459.67) * (5/9);
    celciusInput.value = roundNumTwoDigits(cTemp);
    kelvinInput.value = roundNumTwoDigits(kTemp);
}

function kToCelAndFah(){
    const kTemp = parseFloat(kelvinInput.value);
    const cTemp = kTemp - 273.15;
    const fTemp = (5/9) * (kTemp - 273) + 32;
    celciusInput.value = roundNumTwoDigits(cTemp);
    fahrenheitInput.value = roundNumTwoDigits(fTemp);
}

celciusInput.addEventListener('input', cToFahAndKel);
fahrenheitInput.addEventListener('input', fToCelAndKel);
kelvinInput.addEventListener('input', kToCelAndFah);
