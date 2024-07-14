var animal = {
	kind: 'igloo'
};

console.log(animal);

// var vanessa = {};
// vanessa.__proto__ = animal;

var vanessa = Object.create(
	animal,
	{
		food: { value: ["Passion fruit", "pizza"] },
		pets: { value: true, writable: false },
	}
);

/**
 * Vanessa doesn't have a "kind" property, but as its prototype is "animal" and it has that property, it will print it out as it is its prototype
 */
console.log(vanessa.kind); // igloo

console.log(animal.isPrototypeOf(vanessa));

// It will add the "'kind" property to "vanessa" object, so it's not going to modify the prototype
vanessa.kind = 'human';
vanessa.pets = false; //It will no change
console.log(vanessa.kind);
console.log(animal.kind);