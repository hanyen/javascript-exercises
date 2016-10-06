/* Dog Walker pt 1

Instructions from your teacher:
You are running a part-time dog-walking business. 

You work from Monday to Thursday, from 9am to 3pm. Each walking slot starts on the hour, and is an hour long. You only walk 1 dog per slot.

Write a program that prints out your schedule in a tidy tabular format:

      Mon     Tue     Wed     Thu
9am
10am  Bowser
11am          Fifi
12pm                  Spike
1pm
2pm   LadyKiller

*/

//[done] Dog Data (object)
  //name
  //day
  //time

//Dog Walking Behaviors (functions that operate on players' objects)
  //make a dog
  //display dog info
  //update a dog info

//[done] Team (array of player's object)
  //several dogs 

//Team Behaviors (functions that operate on team array)
  //display all dog walking schedules
  //add a dog walking
  //remove a dog walking


//create dog objects with day and time as the properties
function createDog(name,day,time) {
	dogs.push ({
		name:name,
		day:day,
		time:time
	});
}

//create "dogs"
var dogs = [];
createDog("Bowser", "Mon", "10am");
createDog("Fifi", "Tue", "11am");
createDog("Spike", "Wed", "12pm");
createDog("LadyKiller", "Mon", "02pm");

//create object of available day and time
var availableSlots = {
  day:["Sun","Mon","Tue","Wed","Thr","Fri"],
  time:["09am","10am","11am","12pm","01pm","02pm"]
}

//print schedule
function printSchedule() {
  //print header
  var heading = "\t";
  for (var i=0; i<availableSlots.day.length; i++) {
    heading = heading + "\t" + availableSlots.day[i];
  } console.log (heading);

  var times = "";
  for (var i=0; i<availableSlots.time.length; i++) {
    times = times + availableSlots.time[i] + "\t" + findDogs(availableSlots.time[i]) + "\n";
  } console.log(times);
}
printSchedule();

function findDogs(time) {
  //time = 09am
  var dogNames = "";
  //outer loop keep track of days. Time is constant, passed by printSchedule()
  //inner loop keep track of dogs.
  for (var j=0; j<availableSlots.day.length; j++) {
    for (var i=0; i<dogs.length; i++) {
      if (dogs[i].time === time && dogs[i].day === availableSlots.day[j]) {
      dogNames = dogNames + dogs[i].name + "\t";
      } 
    } dogNames = dogNames + " " + "\t"; //add a tab and move to the next day
  }
  return dogNames;
}
