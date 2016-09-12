/*
The ability to treat functions as values, combined with the fact that local variables 
are “re-created” every time a function is called, brings up an interesting question. 
What happens to local variables when the function call that created them is no longer active?
*/

function wrapValue(n) {
	var localVariable = n;
	return function() {return localVariable};
}
var wrap1 = wrapValue(1);
var wrap2 = wrapValue(2);

console.log(wrap1()); // 1
console.log(wrap2()); // 2

/* 
multiple instances of the variable can be alive at the same time, which is another good 
illustration of the concept that local variables really are re-created for every call —
different calls can’t trample on one another’s local variables.

This feature—being able to reference a specific instance of local variables in an enclosing 
function—is called closure. A function that “closes over” some local variables is called a 
closure. This behavior not only frees you from having to worry about lifetimes of variables 
but also allows for some creative use of function values.
*/

function multiplier(factor) {
	return function (number) {
		return number*factor;
	}
}
var twice = multiplier(2);
console.log(twice(5)); // 10

/* A good mental model is to think of the function keyword as “freezing” the code in its body and 
wrapping it into a package (the function value). So when you read return function(...) {...}, 
think of it as returning a handle to a piece of computation, frozen for later use.

In the example, multiplier returns a frozen chunk of code that gets stored in the twice variable. 
The last line then calls the value in this variable, causing the frozen code (return number * factor;) 
to be activated. It still has access to the factor variable from the multiplier call that created it, 
and in addition it gets access to the argument passed when unfreezing it, 5, through its number parameter.*/

