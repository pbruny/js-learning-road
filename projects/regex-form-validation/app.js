document.querySelector('#name').addEventListener('blur', validateName);
document.querySelector('#zip').addEventListener('blur', validateZip);
document.querySelector('#email').addEventListener('blur', validateEmail);
document.querySelector('#phone').addEventListener('blur', validatePhone);


function validateName(){
    const name = document.querySelector('#name');
    const re = /^[a-záàâãéèêíïóôõöúçñ ]{2,15}$/i;

    if(!re.test(name.value)){
        name.classList.add('is-invalid');
    } else {
        name.classList.remove('is-invalid');
    }
}

function validateZip(){
    const zip = document.querySelector('#zip');
    const re = /^[0-9]{5}(-?[0-9]{3})$/i;

    if(!re.test(zip.value)){
        zip.classList.add('is-invalid');
    } else {
        zip.classList.remove('is-invalid');
    }
}

function validateEmail(){
    const email = document.querySelector('#email');
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    
    if(!re.test(email.value)){
        email.classList.add('is-invalid');
    } else {
        email.classList.remove('is-invalid');
    }
}

function validatePhone(){
    const phone = document.querySelector('#phone');
    const re = /^\+\d{1,3}?\(?\d{2}\)?9[\d]{4}([-. ]?)[\d]{4}$/;
    
    if(!re.test(phone.value)){
        phone.classList.add('is-invalid');
    } else {
        phone.classList.remove('is-invalid');
    }
}
