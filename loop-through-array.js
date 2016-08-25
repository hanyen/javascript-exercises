/*jshint multistr:true */

/*Perfect! You've now got the engine of your search program running. It will:

1. Loop through the array,
2. Compare each letter to the first letter of your name, and if it sees that letter:
3. It will push that letter and all the letters that follow it to an array, stopping when the number of letters it pushes are equal to the number of letters in your name. */

var text = "Hey, how are you \
doing? My name is Emily.";
var myName = "Hanyen";
var hits = [];

for (var i=0; i < text.length; i++)
{
    //check if current letter is equal to the first letter of your name
    if (text[i] === myName[0])
    {
        //if we find the first letter of the name, start the second for loop.
        //this loop says "I'm going to add characters to the array until I hit the length of the user's name."
        //so if your name is 11 letters long, your loop should add 11 characters to hits[] array if it ever sees the first letter of myName in text.
        //first you'll want to set your second loops iterator to start at the first one, so it picks up where that one left off.
        
        for (var j=1; j < myName.length + 1; j++) 
        {
        //in the loop body, use .push() method of hits array. It adds the thing between parentheses to the end of the array.
            hits.push(text[j]);
        }
        
        
    }
}

if (hits[0] == null)
{
    console.log("Your name wasn't found");
} else
{
    console.log(hits);   
}
