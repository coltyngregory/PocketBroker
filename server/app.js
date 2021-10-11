const express = require('express');
const app = express();
const apiKey = "HKTEcSxXtv5xdPC42I4HV7amFczlcJgh2CukxJZV";
const cors = require('cors');

app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/getprices', (req, res) => {
	
});

app.listen(8888, () => {
	console.log('running')
});