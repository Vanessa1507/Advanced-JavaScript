function doAsyncTask(){
	const promise = new Promise((resolve, reject) => {
		// resolve ? reject
		console.log("Async Wok Complete!");
		if (true) {
			resolve()
		} else {
			reject()
		}
	});

	return promise
}


doAsyncTask().then(
	() => console.log("Task Complete!"),
	() => console.log("Task Errored !")
);


function doAsyncTask2() {
	const promise = new Promise((resolve, reject) => {
		// resolve ? reject
		console.log("Async Wok Complete!");
		if (true ) {
		// if (true) {
			resolve({x:1});
		} else {
			reject("Error");
		}
	});

	return promise;
}


doAsyncTask2().then(
	(val) => console.log(val),
	(err) => console.log(err)
);

// Immediately resolve and immediately reject promise:
let promise = Promise.resolve("done")
let promise2 = Promise.reject("fail");


function doAsyncTask3() {
	return Promise.resolve()
}

doAsyncTask3().then(_ => console.log(message)); //"Promise Resolved"
let message ="Promise Resolved"