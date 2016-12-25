// Encapsulation: draw together related data and functionality, making the code easier to understand

// good practice
var account = function(initial) {
  var instance = { 
    balance: initial,
    withdraw: function(amt) { //make the withdraw function part of the object
      this.balance -= amt;
      return this.balance;
    },
    deposit: function(amt) { //make the deposit function part of the object
      this.balance += amt;
      return this.balance;
    }
  };
  return instance;
};

// bad practice
var account = function(initial) {
  var instance = {
    balance: initial
  };
  return instance;
}

var withdrawal = function(acct, amt) {
  acct.balance -= amt;
  return acct.balance;
}

var deposit = function(acct, amt) {
  acct.balance += amt;
  return acct.balance;
}

// Modularity: factoring out similar or reusable code. it's the basis for re-use and composition.

// good practice
var getTitles = function(books) {
  return map(books, function(book) {
    return book.title;
  })
}

var getAuthors = function(books) {
  return map(books, function(book) {
    return book.author;
  })
}

var map = function(array, fn) { // create a map function
  var result = [];
  for (var i = 0; i < array.length; i++) {
    result[i] = fn(array[i]);
  }
  return result;
}

// bad practice
var getTitles = function(books) {
  var titles = [];
  for (var i = 0; i < books.length; i++) {
    titles[i] = books[i].title;
  }
  return titles;
}

var getAuthors = function(books) {
  var authors = [];
  for (var i = 0; i < books.length; i++) {
    authors[i] = books[i].author;
  }
  return titles;
}

// Isolation: the degree to which different parts of the system interact with each other. Minimizing interactions is the goal.

// good practice
var hostess = {
  greet:  function() {
    console.log('hello');
  }
}

var waiter = {
  greet: function(name) {
    console.log('hello');
    console.log('My name is ' + name);
  }
}

var manager = {
  greet: function(name) {
    console.log('hello');
    console.log('My name is ') + name;
  }
}

// bad practice
var hostess = {
  greet:  function() {
    console.log('hello');
  }
}

var waiter = {
  greet: function(name) {
    hostess.greet;
    console.log('My name is ' + name);
  }
}

var manager = {
  greet: function(name) {
    hostess.greet;
    waiter: greet(name);
  }
}

// Coupling: various parts of the system depend on one another. Strive for loosely coupled code.

//good practice
var slide = function(e) {
  e.target.slideUp()
};
$('body').on('click', slide);

var fade = function(e) {
  e.target.fadeIn()
};
$('body').on('click', fade);

var rotate = function(e) {
  e.target.rotateLeft()
}
$('body').on('click', rotate);

//bad practice
var slide = function(e) {
  e.target.slideUp()
}

var fade = function(e) {
  e.target.fadeIn
}

var rotate = function(e) {
  e.target.rotateLeft();
}

var clickHandler = function(e) {
  slide(e);
  fade(e);
  rotate(e);
}
$('body').on('click', clickHandler);


// Thin interface: the complexity of an interface. Aim to create interfaces with as few inputs as possible. Keep the interface simple.

//good practice
var each = function(col, cb) {
  for(var i = 0; i < col.length; i++) {
    cb(col[i]);
  }
}

var map = function(col, cb) {
  var result = [];
  for(var i = 0; i < col.length; i++) {
    result[i] = cb(col[i]);
  }
  return result;
}

var filter = function(col, cb) {
  var result = [];
  for(var i = 0; i < col.length; i++) {
    if(cb(col[i])) result.push(col[i]);
  }
  return result;
}

//bad practice
var megabar = function(col, opts) {
  var i, result = [];
  if (opts.each) {
    for(i = 0; i < col.length; i++) {
      opts.callback(col[i]);
    } else if (opts.map) {
        for (i = 0; col.length; i++) {
          result[i] = opts.callback(col[i]);
        } else if (opts.filter) {
            for (i = 0; col.length; i++) {
              if(opts.callback(col[i])) {
                result.push(col[i]);
              }
            }
        }
    }
  }
  return result;
}

// Private implementation: hide unnecessary complexity from the interface. Designate private implementation with an underscore prefix.

// good practice
var account = function(initial) {
  var instance = { 
    _balance: initial,
    withdraw: function(amt) { //make the withdraw function part of the object
      this._balance -= amt;
      return this.balance;
    },
    deposit: function(amt) { //make the deposit function part of the object
      this._balance += amt;
      return this._balance;
    } 
    verify: function() {
      if(this._balance < 0) alert ('!');
    }
  };
  return instance;
};

// bad practice
var account = function(initial) {
  var instance = { 
    balance: initial,
    withdraw: function(amt) { //make the withdraw function part of the object
      this.balance -= amt;
      return this.balance;
    },
    deposit: function(amt) { //make the deposit function part of the object
      this.balance += amt;
      return this.balance;
    } 
    verify: function() {
      if(this.balance < 0) alert ('!');
    }
  };
  return instance;
};

// Intuitive Abstraction: speaks to the nature of the interface. Create interfaces in a way that model reality in way that is easily understood.

//good practice

var Transmission = function() {
  var instance = {
    gear: null,
    engaged: false,
    changeGear: function(gear) {
      this.engaged = false;
      this.gear = gear,
      this.engaged = true;
    }
  }
  return instance;
}

// bad practice
var Transmission = function() {
  var instance = {
    gear: null,
    engaged: false,
    setClutchState: function(pressed) {
      this.engaged = pressed;
    },
    setGear: function(gear) {
      this.gear = gear;
    }
  }
  return instance;
}
