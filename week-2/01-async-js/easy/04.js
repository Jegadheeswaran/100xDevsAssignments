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

function writeFile() {
	console.log('Writing to a file');
	fs.writeFile('./sample.txt', 'This is the new content', (err) => {
		if (err) {
			console.log(err);
			return;
		}
		console.log('Content written to file');
	});
}

function busyWait(end) {
	let sum = 0;
	for (let i = 0; i <= end; i++) {
		sum += i;
	}
}

function demo() {
    writeFile();
    readFile();
}

demo();