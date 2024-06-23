"use strict";

// function foo() {
// 	console.log(myvar);
// }

// function goo() {
// 	var myvar = 1
// 	foo();
// }

// goo()

// The previous code will jump into an error as in the lexical scoping it was declared first the foo function, so at that point the "myvar" variable doesn't exist into the function and global scope

var myvar = 1;

function goo() {
	// var myvar = 1;

	function foo() {
		console.log(myvar);
	}

	foo(); // 1
}

goo();