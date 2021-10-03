const express = require('express');
const app = express();

app.get('/', (req, res) => {
	this.apiKey = '1N6SG4GFLF1257TV';
	let promiseArray = [];
	for (let i = 0; i < this.tickersToCheck.length; i++) {
		let promise = new Promise((resolve, reject) => {
			let url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${this.tickersToCheck[i]}&outputsize=compact&apikey=${this.apiKey}`
			App.utility.restServiceGet(url).then((data) => {
				this.chartData.push(data);
				resolve();
			}).catch(err => {
				console.error(err);
				reject();
			});
		});
		promiseArray.push(promise);
	}
	Promise.all(promiseArray).then(() => {
		console.log(this.chartData);
	});
  res.send('Hello World!')
});

app.listen(8888, () => {
  console.log(`Server Running...`)
});