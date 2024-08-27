const p = Promise.resolve("done");
// Promise chain
p.then(val => {
	console.log(val); // done
	return "done2"
}).then(val => {
	console.log(val); //done2
});

// Fork
p.then(val => console.log(val)); //done


Promise.resolve("done")
	.then(val => {
		console.log(val); // done
		return new Promise(resolve => {
			setTimeout(() => resolve("done2"), 1000);
		})
	}).then(val => {
		console.log(val); //done2
	});

Promise.reject("fail")
	.then(val => console.log(val)) // We don't have an error handler
	.then(
		val => console.log(val), //done2 
		err => console.error(err)
);
	
new Promise((resolve, reject) => {
	throw "fail with throw"
})
	.then(val => console.log(val)) // We don't have an error handler
	.then(
		val => console.log(val), //done2 
		err => console.error(err)
	);

new Promise((resolve, reject) => {
	return resolve("done")
})
	.then(val => {
		throw "fail";
	})
	.then(
		val => console.log(val), //done2 
		err => console.error(err)
	);

Promise.resolve("done")
	.then(val => {
		throw "fail with catch";
	})
	.catch(err => console.error(err))
	.finally(_=> console.log("Clean up"))
