/*
    This note is about Patterns. The first pattern that I learned about was Module Pattern with the reavealing vary.
    It is just like other programming languages that I already had a knowledge, making the methods or functions private 
    and turning public only by return.
    An example will be made below.
*/

/* const moduleRevealing = (function (){
    const text = 'Hello World'

    function changeText(){
        const newText = document.createElement('h1')
        newText.textContent = text;
        document.querySelector('body').appendChild(newText)
    }

    return{
        changeText: changeText
    }
})(); */


/*
    The singleton pattern is build to allow only one instance of an object. Even if I create another instance, it will link to the first one. It can be checked with a comparison
    between the two objects. In a normal condition, two objects will have two different memory reference and will not be true, but in this case, it will. 
    Exmaple below
*/

/* const Singleton = (function (){
    let instance

    function createInstance(){
        const object = new Object({name: 'Paulo', id: 1})
        return object
    }

    return{
        getInstance: function(){
            if(!instance){
                instance = createInstance()
            }
            return instance
        }
    }
})()

const instanceA = Singleton.getInstance()
const instanceB = Singleton.getInstance()
console.log(instanceA);
console.log(instanceB);
console.log(instanceA === instanceB); */


