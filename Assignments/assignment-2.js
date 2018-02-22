/* Challenge 1 */

for (var i = 1; i < 8; i++) {
  h = "#".repeat(i);
  console.log(h);
}

/*
  Create a for loop that will count from 1 to 7
  Was trying to figure out how to assign that many hashtags to each line in the console
  Researched "repeating strings js" and came across the repeat() function
*/

// console.log("#\n##\n###\n####\n#####\n######\n#######");


/* Challenge 2 */

function isEven(number) {
  if (number % 2 == 0) {
    console.log("This number is even");
  } else if (number % 2 == 1) {
    console.log("This number is odd");
  } else {
    console.log("This is not an integer");
  }
}

console.log(isEven(107.8));

/*
  Create the function
  Use modulo operator to easily check if remainder equals 0 which would be even, or 1 which should be odd
  if it's neither 1 or 0 then is not an integer (could still be a float)
*/
