// use strict
var number = 1;

window.moo = 2;


function local_scope() {
	var foo = 1;
	console.log('foo', foo);
}

// console.log(foo); // Uncaught ReferenceError: foo is not defined
local_scope(); // 'foo' 1


for (var i = 0; i < 5; i++) {
	var j = 5;
}

console.log(j); // 5

{
	var a = "block";
	let b = "let variable";
	const c = "const variable";

	{
		// c = "try to change it"; //Uncaught TypeError: Assignment to constant variable.

		console.log(a);
		console.log(b);
		console.log(c);
	}
}
console.log(a); //block
console.log(b); // Uncaught  ReferenceError: b is not defined
console.log(c); // Uncaught  ReferenceError: c is not defined


for (let index = 0; index < 5; index++) {
	console.log(index);
}

console.log(index); // Uncaught ReferenceError: index is not defined

