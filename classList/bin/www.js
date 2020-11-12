const express = require('express');
const fs = require('fs');
const http = require('http');
const url = require('url');
const path = require('path');

let app = express();
app.use(express.static(path.resolve('../classList/public/stylesheets')));

let server = http.createServer(app);

let port = 3000;

app.get('/', (req, res) => {
	res.sendFile(path.resolve('../classList/views/template-home.html'));
});

app.get('/classlist', (req, res) => {
	res.sendFile(path.resolve('../classList/views/template-classlist.html'));
	let filterProgram = require('../public/javascripts/filters');
});

// app.get('/home', (req, res) => {
// 	res.sendFile(tempHome);
// });

app.listen(port, 'localhost');
server.on('listening', () => {
	console.log(`Express server started on port ${port}`, server.address().port, server.address().address);
});
