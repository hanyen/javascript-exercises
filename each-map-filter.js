//========================================================================
// Filter function: return element that pass the test
// Forrest: It's called a predicate because that's what this kind of boolean 
// return function is called in math :)

function filter(array, predicate) {
  var acc = [];
  each(array, function(element, i) {
    if (predicate(element, i)) {
      acc.push(element);
    }
  });
  return acc;
}

function each(array, func) {
  for (var i = 0; i < array.length; i++) {
    func(array[i], i);
  }
}

/* // This each function also handles object
function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
} */

function map(array, f) {
  var acc = [];
  each(array, function(element, i) {
    acc.push(f(element, i));
  });
  //console.log("acc is now: "+acc);
  return acc;
}
