const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const colors = require('colors');
const app = express();
const session = require('express-session');

const sessionConfig = {
	secret:'CookieMonster', // Secret name for decoding secret and such
	resave:true, // Don't resave session if no changes were made
	saveUninitialized: true, // Don't save session if there was nothing initialized
	name:'myCookie', // Sets a custom cookie name
	cookie: {
		secure: false, // This need to be true, but only on HTTPS
		httpOnly:false, // Forces cookies to only be used over http
		maxAge: 3600000
	}
}

app.use(session(sessionConfig));
// API file for interacting with MongoDB
require('./server/config/mongoose.js');
const api = require('./server/routes/api');

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));

// API location
app.use('/api', api);

// Send all other requests to the Angular app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));