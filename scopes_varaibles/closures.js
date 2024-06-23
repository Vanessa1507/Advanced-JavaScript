"use strict";
function sayHello(name) {
	var text = "Hello " + name;
	return function () {
		console.log(text);
	};
}

// sayHello("Vanessa")();
var sayVanesaa = sayHello("Vanessa");
sayVanesaa();


var foo = [];
for (var i = 0; i < 10; i++) {
	foo[i] = function () { return i; };
}

console.log(foo[0]()); // 10
console.log(foo[1]()); // 10
console.log(foo[2]()); // 10

// In this example, when the function was stored on each position of our array, it didn't create a copy of the value of "i" in that moment, what it does is to have the actual value of "i" in the outer scope


var foo2 = [];
for (var i = 0; i < 10; i++) {
	(
		// function () {
		// 	var y = i;
		// 	foo2[i] = function () { return y; };
		// }

		/**
		 * It creates a copy of "i"
		 */
		function (y) {
			foo2[y] = function () { return y; };
		}
	)(i);
}

console.log(foo2[0]()); // 0
console.log(foo2[1]()); // 1
console.log(foo2[2]()); // 2