"use strict";

function Person(first_name, second_name) {
	this.first_name= first_name
	this.second_name = second_name 

	this.full_name = function () {
		return first_name + " " + second_name
	}
}


Person.prototype.full_name_function = function () {
	return this.first_name + " " + this.second_name;
}

// This will trigger an error because in the strict mode, "this" is undefined
// var someone= Person('laura', 'suarez')

var someone = new Person('laura', 'suarez');
console.log(someone.full_name( ));
console.log(someone.full_name_function());

// var someone = {};
// Person.call(someone, 'laura', 'suarez');
// console.log(someone);

someone.first_name = "Vanessa"
console.log(someone.full_name_function()); // Vanessa suarez