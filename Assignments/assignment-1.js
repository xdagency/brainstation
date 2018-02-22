/* Create a variable named `numbers` and assign an empty array to it. */
var numbers = [];

/* Using a for-loop and the Array push() method, insert the integers (numbers) 0 to 9 into the array you named numbers. */
for (var i=0; i < 10; i++) {
  numbers.push(i);
}

/* Test that you used the array push method correctly by console logging the first item in the array. */
console.log(numbers[0]);

/* Console log the last item in the array. */
console.log(numbers[9]);

/* Create another variable named car and assign an empty object to it. */
/* var car = new Object(); */
var car = {}

/* Give the object a property called colour and assign it the value of "blank". */
car.colour = "blank";
