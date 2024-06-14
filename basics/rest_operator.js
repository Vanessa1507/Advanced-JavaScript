function sum(a, b) {
	return a+b
}

sum(1, 2);//3
sum(1, 2, 3); //3
sum(1,2,3,4 ) //3
sum(1); //NaN (Not a Number)


function sum2() {
	console.log(arguments); // Let us handle or know all of the arguments that are passed in our function

	let total = 0;
	for (let i = 0; i < arguments.length; i++) {
		total += arguments[i];
	}

	return total;
}

sum2(1, 2);//3
sum2(1, 2, 3); //6
sum2(1, 2, 3, 4); //10
sum2(1); // 1


function login(method) {
	var options = arguments.slice(1); //TypeError: arguments.slice is not a function at login
	var options = Array.prototype.slice.call(arguments, 1)
	
	console.log(method);
	console.log(options);
}
login("facebook", 1, 2, 3, 4);


function login_rest(method, ...options) {
	console.log(method);
	console.log(options);
}
login_rest("facebook", 1, 2, 3, 4);