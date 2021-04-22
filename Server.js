//Express to run the server.
const express = require('express');

//Start up an instance of an app.
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

//Initialise the main project folder.
app.use(express.static('website'));

const port = 8000;
const server = app.listen(port, listening);

function listening(){
    console.log('server running.');
    console.log(`running on localhost: ${port}`);
}