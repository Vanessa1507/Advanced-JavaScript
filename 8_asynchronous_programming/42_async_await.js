const doAsyncTask = () => Promise.resolve("done");

(
	async function () {
		let value = await doAsyncTask();
		console.log(value);	
	}
)()

doAsyncTask().then(val => console.log(val));
console.log("Here");

async function vanessa() {
	let value = await doAsyncTask()
	console.log(value);
}

vanessa();

(
	async function () {
		// let value = await doAsyncTask();
		// console.log(value)
		doAsyncTask().then(val => console.log(val))
		console.log("done 2");
	}
)();


const asyncFunction = async function () {
	let value = await doAsyncTask();
	console.log(value);
	console.log("2");
	return "13"	 // Whatever we return is like a resolve
};

asyncFunction().then(v=> console.log(v))


const doAsyncTaskReject = () => Promise.reject("fail");


const asyncFunctionTryCatch = async function () {
	try {
		const value = doAsyncTaskReject()
		return value

	} catch (error) {
		console.error("Moo:", error)
		return
	}
};

asyncFunctionTryCatch();


const doAsyncTask2 = delay => {
	return () => new Promise(resolve => {
		return setTimeout(
			() => resolve(delay),
			delay
		);
	});
};

let promises = [doAsyncTask2(1000), doAsyncTask2(2000), doAsyncTask2(3000)];

(
	async function () {
		for (const task of promises) {
			console.log(await task());
		}		
	}
)();



async function printLine1() {
	console.log("1");	
}

async function printLine2() {
	console.log("2");
}


async function main() {
	printLine1()
	printLine2()	
}

main();
console.log("Finished");