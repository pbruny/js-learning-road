/* Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chess board.

Passing this string to console.log should show something like this:

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.
*/

/* My comments about this exercise:
   I have tried about 4 times unitl I reached to a solution;
   First, I made the for loops and tried to do the console.log() inside the loops. Wrong;
   Second, I tried to put the console.log() only in the lines loop (first for) and still wrong;
   Third, I realized that the console.log() need to be outside the loop and an auxiliary variable to store the content need to be created;
   Fourth, I think in a logic like "if the line is odd and the position is odd too, print space, if the position is even, print hash. if the line is even and position is odd, print hash, if position
   is even, print space" but it is not the best logic to do this. So, I realized again that the sum of the both indexes for line and position give me better information. So, if the sum of line and
   position is even, print space, else, print hash, and this logic is valid to all boardSize.
*/

let boardSize = 8; //Set the board Size
let output = ""; //Initialize the output with empty sting

for(let i = 1; i <= boardSize; i++){ //This for if for the lines
  for(let j = 1; j <= boardSize; j++){ //This for si for the positions in the lines
    //Check if the sum of line and position in line is even
    if((i + j) % 2 == 0){
      output += " "; //If it is even, store a space
    }else{
      output += "#"; //If it is odd, store a hash
    }
  }
  output += "\n"; //store a break line after all positions in a line is filled
}

console.log(output); //Show the board 
