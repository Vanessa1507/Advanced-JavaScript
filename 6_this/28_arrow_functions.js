// setTimeout(function() {
// 	console.log("setTimeout called!");
// }, 1000);
// setTimeout(()=> {
// 	console.log("setTimeout called!");
// }, 1000);


let cb = () => {
	console.log("setTimeout called!");
};

// let cb = function {
// 	console.log("setTimeout called!");
// };

setTimeout(cb, 1000);


// let add = function (a, b) {
// 	return a+b
// };

let add = (a, b) => a + b; //It returns a+b without using the return keyword

add(1, 2);


// ===================================
let obj = {
	name: "Vanessa",
	sayLater: function () {
		console.log(`Bye ${this.name}`);
	}
};
obj.sayLater(); // Bye Vanessa


let obj2 = {
	name: "Vanessa",
	sayLater: function () {
		setTimeout(function () {
			console.log(`Bye ${this.name}`);
		}, 1000);
	}
};
obj2.sayLater(); // Bye

// We don't change the sayLater function sintaxis because is we change it to as an arrow function it will take this as the window object and not the obj3, because in that case the object is being defined in the global scope, and the value of this in that context is window
let obj3 = {
	name: "Vanessa",
	sayLater: function () {
		setTimeout(() => {
			console.log(`Bye ${this.name}`);
		}, 1000);
	}
};
obj3.sayLater(); // Bye Vanessa


let obj4 = {
	name: "Vanessa",
	sayLater: () => {
		setTimeout(() => {
			console.log(this);
			console.log(`Bye ${this.name}`);
		}, 1000);
	}
};

obj4.sayLater(); // window object, Bye