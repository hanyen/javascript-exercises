//1. Create an array of numbers, save it to a variable
var myArray = [1,2,3,4,5];

//2. Use a loop to iterate through each element of the array
//wrap as function? No need for now.

//Review for-in loop, do we need it here?
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in

for(var i=0; i<myArray.length; i++) {
	//myArray.length = 5
	//i = 0, myArray[0] is 1, result = 1
	//i = 1, myArray[1] is 2, result = 4
	//i = 2, myArray[1] is 2, result = 4
	//i = 3, myArray[1] is 2, result = 6
	//i = 4, myArray[1] is 2, result = 8
	//i=5 exit
	//console.log(myArray[i]);
	
	//4. Pass each number from the array to the "doubling" function in turn call doubling function, passing the current array location value
	//Need to be able to receive value returned
	var result = doubling(myArray[i]);
	//console.log(result);

	//5. Save the original numbers and the double results as key-value pairs in an object
	
	//Use object constructor
	var myObject = new Object();
	//find a method that can create properties on the fly
	//http://stackoverflow.com/questions/2241875/how-to-create-an-object-property-from-a-variable-value-in-javascript
	//Use bracket notation. An advantage of bracket notation is that we are not restricted to just using strings in the brackets. We can also use variables whose values are property names
	var myKey = myArray[i];
	myObject[myKey] = result;
	
	console.log(myObject);
	}

	

//3. write a separate "doubling" function that returns any number 
//it is given multiplied by two
function doubling(num) {
	num = num*2
	return num;
}



