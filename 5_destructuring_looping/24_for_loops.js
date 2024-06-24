let arr = [1, 2, 3];

for (let i = 0; i < arr.length; i++) {
	const element = arr[i];
	console.log(element);
	break;
}

for (let i = 0; i < arr.length; i++) {
	const element = arr[i];
	console.log("1st", element);
	continue;
	console.log("2nd", element);
}

function doSomethingFor() {
	for (let i = 0; i < arr.length; i++) {
		const element = arr[i];
		console.log(element);
		return;
	}
}

doSomethingFor(); // return undefined and console 1


arr.forEach(element => {
	console.log(element);
});


function doSomethingForEach() {
	arr.forEach(element => {
		console.log(element);
		return;
	});
}

doSomethingForEach(); // return undefined and console 1,2,3


let obj = { a: 1, b: 2 };

for (const key in obj) {
	console.log(key);	
}


for (const index in arr) {
	console.log(index);	
	console.log(typeof (index));
}


for (const value of arr) {
	console.log(value);
	console.log(typeof (value));	
}