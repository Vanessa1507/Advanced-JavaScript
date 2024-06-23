'use strict';
/**
 * var a
 * console.log(a); // undefined
 * a = 1;
 */
console.log(a); // undefined
var a = 1;

/**
 * foo()
 * 
 * function foo() {
 * 		console.log(a); // undefined
 * 		var a = 1;
 * }
 */
function foo() {
	/**
	 * var a
	 * console.log(a); // undefined
	 * a = 1;
	 */
	console.log(a); // undefined
	var a = 1;
}

foo();


/**
 * var moo; // undefined
 * 
 * moo(); // Undefined cannot be called
 */
moo(); // TypeError: moo is not a function

var moo = function () {
	console.log("Hello")
}