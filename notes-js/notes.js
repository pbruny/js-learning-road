//First Program in JavaScript

/*
First tests on concepts

console.time('Init');
console.log("Hello World!");
console.log("This is a test");
console.log(123);
console.log(true);
console.log([1, 2, 3, 4]);
console.log({a:1, b:2});
var test = 'Hello Dude';
console.log(test);
console.table({a:1, b:2});
console.timeEnd('finish ma friend');


*/

//Testing Data Types

//Primitive Types
//String
const name = 'Paulo';
console.log(typeof name);

//numbers
const age = 22;
console.log(typeof age);

//boolean
const hasKids = false;
console.log(typeof hasKids);

//Null
//Null is classified as an object but is a 'bug' in JavaScript, it continues as a Primitive type
const testType = null;
console.log(typeof testType);

//Undefined
//Here we have to use let instead of const because const cannot be declared Undefined, if we do so, it returns an error
let test;
console.log(typeof test);

//Symbol
const sym = Symbol();
console.log(typeof sym);
//Finish primitive types


//Reference Types - aka Objects
//Arrays
const hobbies = ['movies', 'music', 'gaming'];
console.log(typeof hobbies);

//Literal Objects
const address = {
  country: 'Brazil',
  city: 'Petrolina',
  state: 'PE'
}

const today = new Date();
console.log(today);
console.log(typeof today);
