document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e){
    let number = document.querySelector('input[type="number"').value;
    const xhr = new XMLHttpRequest();
    if(number == ''){
        number = 1;
    }
    
    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

    xhr.onload = function() {
        if(this.status === 200){
            const response = JSON.parse(this.responseText); 
            let output = '';
            if(response.type === 'success'){
                response.value.forEach((joke) => {
                    output += `<li>${joke.joke}`
                })
            } else {
                output += `<li>Something went wrong</li>`
            }
            document.querySelector('.jokes').innerHTML = output;
        }
        
    }

    xhr.send();

    e.preventDefault();
}