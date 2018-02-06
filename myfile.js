/*
  Learning about vars and arrays
*/

var wrapper = getElementById("wrapper");
var fruits = ["apple", "pear", "orange"];

if (fruits[1] == "pear") {
  alert("There's a pear here.")
}

/*
  Learning about loops and conditional statements
*/

for (var i = 1; i < 101; i++) {
	if (i % 5 == 0 && i % 3 != 0) {
		  console.log('fizz');
    } else if (i % 3 == 0 && i % 5 != 0) {
		    console.log('buzz');
    } else if (i % 15 == 0) {
		    console.log('fizzbuzz');
    } else {
		    console.log(i);
    }
}


/*
  Assignment, creating a chessboard
*/

for (i = 0; i < 8; i++) {
	if (i % 2 == 0) {
	    console.log("# # # # \n");
  } else {
      console.log(" # # # #\n");
  }
}
