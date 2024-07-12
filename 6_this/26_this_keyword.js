console.log(this); // window object

this.vanessa = 13;

console.log(this.vanessa);
console.log(window.vanessa);
console.log(vanessa);

function checkThis() {
	console.log(this); // window object
}

checkThis();

var vanessa = {
	checkThis: function () {
		console.log(this); // my object

		function checkOther() {
			console.log(this); // window object
			this.moo = 1; 
		}
		checkOther();
		console.log(this.moo); // undefined
		console.log(window.moo); // 1
	}
};

vanessa.checkThis(); // vanessa object
console.log(vanessa);

var func = vanessa.checkThis;
func(); // Window object


var laura = {
	checkThis: function () {
		console.log(this);
		//"use strict"
		var self = this;
		console.log(self);

		function checkOther() {
			//console.log(this);
			console.log(self);
			self.moo = 1;
			//this.moo =1
		}
		checkOther();
		console.log(self.moo);
		console.log(window.moo);
	}
};
laura.checkThis();
var func = laura.checkThis;


// Default binding
function doSomething() {
	console.log(this.a);
}
var a = 6;
doSomething(); //6

// implicit binding
function doSomething() {
	console.log(this.a);
}
var a = 6;
var obj = {
	a: 12,
	doSomething: doSomething
};
obj.doSomething(); //12


var a = 6;
var obj = {
	a: 12,
	doSomething: function () { console.log(this.a); }
};
var foo = obj.doSomething;
foo(); //6


var input = 1;
function square() {
	let cbFn = function () { console.log(this.input * this.input); };
	setTimeout(cbFn, 1000);
};
var obj = {
	input: 3,
	square: square
};
obj.square(); // 1