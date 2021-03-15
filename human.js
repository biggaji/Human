function Human() { }

Human.prototype = {
    walk: function () {
        // 
    },
    talk: function () {
        // 
    },
    eat: function () {
        // 
    },
    sleep: function () {
        // 
    }
}

function Person() { }

// using the new keyword has some disadvantage
// so it is advisable to use the Object.create() method

// Inherit methods from the human prototype
Person.prototype = Object.create(Human.prototype);

// set the prototype constructor to Person
// if not set it inherits the Supertype constructor 
Person.prototype.constructor = Person;


// create a new instance of Person

let tobi = new Person();