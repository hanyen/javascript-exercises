/* Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. 
For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), 
print "Buzz" instead. When you have that working, modify your program to print "FizzBuzz", for numbers that 
are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
 */
//use short-circuit logical operator? No. But pay attention to the order of execution!!

//loop start
for (var i=1; i<101; i++) {
  if (i%5===0 && i%3===0)  // if divisible by 3 and 5
	  console.log("FizzBuzz");
	else if (i%3===0)  // if divisible by 3
	  console.log("fizz");
  else if (i%5===0 && i%3!==0)  // if divisible by 5 && not 3
	  console.log("buzz");
  else
  console.log(i);
  //loop end
}


/*
Going over the numbers is clearly a looping job, and selecting what to print is a matter of conditional execution. 
Remember the trick of using the remainder (%) operator for checking whether a number is divisible by another number 
(has a remainder of zero).

In the first version, there are three possible outcomes for every number, so you’ll have to create an if/else if/else 
chain.

The second version of the program has a straightforward solution and a clever one. The simple way is to add another 
“branch” to precisely test the given condition. For the clever method, build up a string containing the word or words 
to output, and print either this word or the number if there is no word, potentially by making elegant use of the || 
operator.
*/
