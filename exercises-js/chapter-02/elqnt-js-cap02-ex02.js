/* Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
*/

/* My comments about this exercise:
   I have tried about 3 times to do this until I reached the correct solution;
   First try, I made the first part of the exercise with if/else if structure and it was correct;
   Second try, I made another condition to show the numbers divided by 3 and 5, but it does not worked;
   Third try, I realized that I have to delete elses and if the numbers was divided by 3 and 5, both if conditions have be accepted and I would have the correct solution;
*/


//The loop below run 100 times
for (let numbers = 1; numbers <= 100; numbers++) {
  let output = ""; //Empty string to output
  //Check if the actual number is divided by 3
  if ((numbers % 3) == 0) {
    output += "Fizz"; //If the condition is true, output receives empty string plus Fizz string
  }
  //Check if the actual number is divided by 5
  if((numbers % 5) == 0) {
    output += "Buzz"; //If the condition is true, output receives empty string plus Buzz string , but if the number is divided by 3 and 5, output already has Fizz and receives plus Buzz string
  }
  //Show the numbers and Fizz, Buzz or FizzBuzz in the console
  console.log(output || numbers);
}
