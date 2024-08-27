function doAsyncTask(cb) {
	setTimeout(cb, 0) //Call it as soon as possible
}

doAsyncTask((error, data) => {
	if (error) {
		throw error
	} else {
		console.log("Data", data);
	}
})

let message = "Callback called"