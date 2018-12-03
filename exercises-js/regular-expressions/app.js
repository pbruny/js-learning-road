const re = /hello/;
const rei = /hello/i;

/* const test = re.exec('I am Paulo, hello there')

console.log(test.input) */

const result = re.test('Hello')
const resulti = rei.test('Hello')
console.log(result);
console.log(resulti);

//Metacharacters

let reg = /^h/; //begins with an h
reg = /world$/; //ends with world
reg = /^world$/; //must begin and end with world
reg = /w.rld/; //matches with any ONE literal character, it could not be "woorld", for example, but it can be                     "wfrld"
reg = /gra?e?y/; //Optional character, in this example, because the gray is spelled in two ways


