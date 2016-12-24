//generate stories that are all about the same hero.
//put hero variable in global scope

var hero = ' hero';
var newSaga = function() {
  //different access rule will apply within this curly brackets
  //it has a few more limits than the lexical scope around it
  var foil = ' foil';
  var counter = 0;
  var saga = function() {
    var deed = ' deed';
    counter ++;
    console.log(hero + deed + foil);
    console.log(counter);
    }
  saga();
  return saga; //return saga function

};
//if we attempt to access foil outside the function,
//it won't have access it. Even after the function is run,
//we still won't have access to it.

//invoke newSaga twice to create two stories
var result = newSaga();
result();
result();
