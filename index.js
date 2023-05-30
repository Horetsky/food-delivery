const express = require('express');
const path = require('path');

const cors = require("cors");
const bodyParser = require("body-parser");

const db = require('./db.json')
const app = express();
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/products", (req, res) => {
    res.json(db.products)
})
app.get("/shops", (req, res) => {
    res.json(db.shops)
})

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));
// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);