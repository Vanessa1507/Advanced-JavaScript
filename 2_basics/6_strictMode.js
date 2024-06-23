"use strict";

// Not strict mode...
// function newCode() {
// 	"use strict";
// 	// strict mode...    
// }


var theVal = 0;
thVal = 1; // ReferenceError: thVal is not defined
if (theVal > 0) {
	console.log("hello");
}


var let = 1; // SyntaxError: Unexpected strict mode reserved word


var foo = 1;
delete foo; // Delete of an unqualified identifier in strict mode.

function moo(arg) {
	delete arg; //SyntaxError: Delete of an unqualified identifier in strict mode.
}
delete moo; // Delete of an unqualified identifier in strict mode.


eval("var a=1");
console.log(a); // ReferenceError: a is not defined
