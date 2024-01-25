const fs = require('fs');

function readFile() {
	console.log('Reading file');
	fs.readFile('./sample.txt', 'utf-8', (err, data) => {
		if (err) {
			console.log(err);
			return;
		}
		console.log('Content read from file : ' + data);
	});
}


function busyWait(end) {
	let sum = 0;
	for (let i = 0; i <= end; i++) {
		sum += i;
	}
}

function demo() {
	readFile();
	busyWait(1000);

	console.log('Demonstration complete');
}

demo();