// Passing variables by value
"use strict";

var a = 1; //by value
var b = {} // by reference
var c = { 'too': 'moo' } // by reference


function foo(a, b, c) {
	a = 2 //copy of the variable
	b.moo = false // modify the original variable
	c={'moo': "foo"} // only inside the scope because is trying to modified what it points too, not an specific property of the reference
	console.log(a); // 2
}

foo(a)
console.log(a); // 1
console.log(b); // {moo: false }
console.log(b); // {too: "moo" }