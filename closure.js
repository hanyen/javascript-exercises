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
