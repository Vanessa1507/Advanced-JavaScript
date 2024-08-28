const doAsyncTask = delay => {
	return new Promise(resolve => {
		return setTimeout(
			() => resolve(delay),
			delay
		)
	})
};

let promises = [doAsyncTask(1000), doAsyncTask(2000), doAsyncTask(3000)];

Promise.all(promises).then(values => console.log(values));
