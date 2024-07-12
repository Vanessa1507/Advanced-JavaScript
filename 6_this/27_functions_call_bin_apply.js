function vanessa(param1, param2) {
	console.log(this);
}

vanessa();
vanessa.moo = 1;
console.log(vanessa.name);
console.log(vanessa.toString());


/**
 * ===================================
 * 				call()
 * ===================================
 */
// "use strict";

function vanessa2() {
	console.log(this);
}

vanessa2.call(); // undefined
vanessa2.call({}); // {}
vanessa2.call(1); // 1

// ===================================

var my_obj = {
	checkThis: function () {
		function checkOther() {
			console.log(this);
		}
		checkOther.call(this); // my_obj
	}
};

my_obj.checkThis(); // object
my_obj.checkThis.call(); // strict mode undefined, otherwise window

// ===================================

function a(b, c, d) {
	console.log(this);
	console.log(b);
	console.log(c);
	console.log(d);
}

a.call(1, 2, 3, 4);


/**
 * ===================================
 * 				apply()
 * ===================================
 */
a.apply(1, [2, 3, 4]);



/**
 * ===================================
 * 			call() vs apply()
 * ===================================
 */
function sum() {
	var total = 0;
	for (let i = 0; i < arguments.length; i++) {
		total += arguments[i]
	}

	return total
}

const numbers= [1,56,12,17,9,56,8,42,3]

var result1 = sum(1, 2, 3);
var result2 = sum.call(null, 1, 2, 3);
var result3 = sum.call(null, numbers);
var result4 = sum.apply(null, numbers);

console.log(result1); //6
console.log(result2); //6
console.log(result3); // 01,56,12,17,9,56,8,42,3

console.log(result4); // 204


/**
 * ===================================
 * 				bind()
 * ===================================
 */
var b = function () {
	console.log(this);
}

b(); // "strict mode" undefined, otherwise window

var c = function () {
	console.log(this);
}.bind(1);

c(); // "strict mode" 1, otherwise 1

var new_object = {
	func:c
};

new_object.func(); // 1


var my_obj2 = {
	checkThis: function () {
		var checkOther = function () {
			console.log(this);
		}.bind(this);
		checkOther.call(this); // my_obj
	}
};

my_obj2.checkThis(); // my_obj 