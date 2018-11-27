/*
    This note is about Patterns. The first pattern that I learned about was Module Pattern with the reavealing vary.
    It is just like other programming languages that I already had a knowledge, making the methods or functions private 
    and turning public only by return.
    An example will be made below.
*/

const setText = (function (){
    const text = 'Hello World'

    function changeText(){
        const newText = document.createElement('h1')
        newText.textContent = text;
        document.querySelector('body').appendChild(newText)
    }

    return{
        changeText: changeText
    }
})();