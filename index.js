// import the pets array from data.js
const pets = require('./data');

// init express app
const express = require('express');
const app = express();

// init path package
const path = require('path')

const PORT = 8080;

// GET - / - returns homepage
app.get('/', (req, res) => {
    // serve up the public folder as static index.html file
    // outside of function, store path package in variable
    // use res.sendFile to link '/' to index.html
    res.sendFile(path.join(__dirname, "public", "index.html"));

});

// hello world route
app.get('/api', (req, res) => {
    res.send('Hello World!');
});

// get all pets from the database
app.get('/api/v1/pets', (req, res) => {
    // send the pets array as a response
    res.json(pets);
});

// get pet by owner with query string
app.get('/api/v1/pets/owner', (req, res) => {
    // get the owner from the request
    // declare owner variable to store owner input value
    // use req.query to query for that owner value
    const owner = req.query.owner;

    // find the pet that matches the queried owner in the pets array
    const pet = pets.find(pet => pet.owner === owner);

    // send the pet as a response
    res.json(pet);
});

// get pet by name
app.get('/api/v1/pets/:name', (req, res) => {
    // get the name from the request


    // find the pet in the pets array
    const pet = pets.find(pet => pet.name === name);

    // send the pet as a response

});

app.listen(PORT, () => {
    console.log('Server is listening on port ' + PORT);
});

module.exports = app;