// First real experience creating a full stack web application
// Previously only worked on WPF, Android Kotlin, or simple Console applications (I am primarily a Backend Dev)
// Using this app as a learning experience primarily

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 8080;

// BodyParser, required to read HTML content
app.use(bodyParser.urlencoded({extended: true}));

// SET the view engine to be EJS (Embedded JavaScript)
app.set('view engine', 'ejs');

// Access and USE the static content found in the public folder
app.use(express.static(__dirname + '/public'));

// GET route, rendering the index.html page and passing on the list of names
app.get('/', (req, res) =>{
    res.render('index');
});

// POST request for Ping Check
app.post('/ping', (req, res) => {
    console.log("Pong!", req.body);
    res.json({response: 'Button Clicked Successfully'});
});

// Start the server
app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});