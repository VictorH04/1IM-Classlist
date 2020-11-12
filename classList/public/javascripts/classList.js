// Imports
const fs = require('fs');
const http = require('http');
const url = require('url');

const jsdom = require('jsdom');
const { JSDOM } = jsdom;

// Modules
const replaceTemplate = require('./starter/modules/replaceTemplate');

//////////////! Server
// Get the templates (html-files)
const tempHome = fs.readFileSync(`${__dirname}/starter/templates/template-home.html`, 'utf-8');
const tempClassList = fs.readFileSync(`${__dirname}/starter/templates/template-classlist.html`, 'utf-8');

// Get the data from the data.json file
const data = fs.readFileSync(`${__dirname}/starter/dev-data/data.json`, 'utf-8');
// convert(parse) the JSON data string to a object
const dataObj = JSON.parse(data);

// script
const server = http.createServer((req, res) => {
	// console.log(req.url);
	// console.log(url.parse(req.url, true));

	const { query, pathname } = url.parse(req.url, true);

	// home page
	if (pathname === '/' || pathname === '/home') {
		res.writeHead(200, { 'Content-type': 'html' });

		// const classListHtml = dataObj.map((el) => replaceTemplate(tempClassList, el)).join('');
		const output = tempHome;

		console.log(tempHome);

		res.end(output);
	}
});

let port = 8000;

server.listen(port, '127.0.0.1', () => {
	console.log(`Listening to request on port ${port}`);
});
