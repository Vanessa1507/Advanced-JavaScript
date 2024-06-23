var ar1 = [4, 5, 6];
var ar2 = [1, 2, 3, ...ar1];
var ar3 = [1, 2, 3, ar1];

console.log(ar2); // [1, 2, 3, 4, 5, 6]
console.log(ar3); // [1, 2, 3, [4, 5, 6]]

var ar4 = [...ar1];
var ar5 = ar1;
ar1[0]=-1
console.log(ar1); // [-1, 5, 6]
console.log(ar4); // [4, 5, 6]
console.log(ar5); // [-1, 5, 6]


function login_spread(method, ...options) {
	console.log(method);
	// console.log(...options); // If I don't spread the arguments when I call the function
	console.log(options);
}

var meth= "twitter"
var opts = ["key", "callbackUrl"]

login_spread(meth, opts);
login_spread(meth, ...opts);