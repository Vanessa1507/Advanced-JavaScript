var Person = {
	// 1. Pass properties
	// We initialize the parameters of our Prototype
	init: function (first_name, last_name) {
		this.first_name = first_name;
		this.last_name = last_name;

		return this;
	},
	full_name: function () {
		return this.first_name + " " + this.last_name;
	}
};

var Professional = Object.create(Person, {
	init: {
		value: function (honorific, first_name, last_name) {
			this.honorific = honorific;
			this.first_name = first_name;
			this.last_name = last_name;

			return this;
		}
	},
	professional_name: {
		value: function () {
			return this.honorific + " " + this.first_name + " " + this.last_name;
		}
	}
});

// Professional.init = function (honorific, first_name, last_name) {
// 	this.honorific = honorific;
// 	this.first_name = first_name;
// 	this.last_name = last_name;

// 	return this;
// };

// 3. Pass properties
function PersonFactory(first_name, last_name) {
	var person = Object.create(Person);

	person.first_name = first_name;
	person.last_name = last_name;

	return person;
}

// function ProfessionalFactory(honorific, first_name, last_name) {
// 	var human = Object.create(Person);
// 	human.honorific = honorific;
// 	human.first_name = first_name;
// 	human.last_name = last_name;

// 	return human;
// }

var vanessa = Object.create(Person);
vanessa.init("Vanessa", "Suarez");
console.log(vanessa.full_name()); // Vanessa Suarez

// 2. Pass properties
// We pass as the second argument the parameters of our function
var laura = Object.create(Person, { first_name: { value: "Laura" }, last_name: { value: "Garcia" } });
console.log(laura.full_name()); // Laura Garcia;


// Create a person with a factory
var pepita = PersonFactory("Pepita", "Perez");
console.log(pepita.full_name()); //Pepita Perez


var mike = Object.create(Professional);
mike.init("Dr.", "Mike", "Varshavski");
mike.professional_name(); // Dr. Mike Varshavski
mike.full_name(); // Mike Varshavski