/*Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/

var result = "#"; //Gives one initial hash character to the result variable.

//The loop below will run 7 times
for (let i = 0; i < 7; i++){
  console.log(result); //Show the result in the console to form the triangle
  result += "#"; //Add one more hash character to the result
}
