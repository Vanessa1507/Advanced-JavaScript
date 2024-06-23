"use strict";

// function otherScope() {
// 	var thing = { "hello": "other" };
// 	console.log("other", thing);
// }
// otherScope();

(function () {
	var thing = { "hello": "other" };
	console.log("other", thing);
})()