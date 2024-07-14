"use strict";

function Person(first_name, second_name) {
	this.first_name = first_name;
	this.second_name = second_name;
}

Person.prototype.full_name = function () {
	return this.first_name + " " + this.second_name;
};

var someone = new Person('Laura', 'Suarez');
console.log("someone", someone.full_name());

function Professional(honorific, first_name, last_name) {
	// This doen't inherit anything from Person, we are just calling the body of person
	Person.call(this, first_name, last_name);
	this.honorific = honorific;
}

Professional.prototype = Object.create(Person.prototype);

Professional.prototype.professional_name = function () {
	return this.honorific + " " + this.first_name + " " + this.second_name;
};

var prof = new Professional("Dr.", "Mike", "Varshavski");
console.log("prof (professional name)", prof.professional_name()); // prof (professional name) Dr. Mike Varshavski 
console.log("prof (name)", prof.full_name()); // prof (name) Mike Varshavski 
