function doAsyncTask(cb) {
	setTimeout(() => {
		console.log("Async Task Calling Callback");
		cb();
	}, 0); //Call it as soon as possible
}
doAsyncTask(() => {
	doAsyncTask(() => {
		doAsyncTask(() => {
			doAsyncTask(() => {
				doAsyncTask(() => {
					doAsyncTask(() => {
						doAsyncTask(() => {
							doAsyncTask(() => {
								doAsyncTask(() => {
									doAsyncTask(() => {

									});
								});
							});
						});
					});
				});
			});
		});
	});
});