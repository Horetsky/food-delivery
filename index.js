const express = require('express');
const path = require('path');
const mongoose = require("mongoose");
const Product = require("./models/products");
const Shop = require("./models/shops");
const Order = require("./models/orderHistory");

const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const dbUri = "mongodb+srv://nadvorniyoleh:47HaxbHwMlf55Ssy@cluster0leh.kpbqaf4.mongodb.net/?retryWrites=true&w=majority"

async function connectToDb() {
    try {
        await mongoose.connect(dbUri);
    } catch (e) {
        console.log(e)
    }
}

connectToDb()

app.get("/products", (req, res) => {
    Product
        .find({})
        .then(products => res.json(products))
        .catch(err => console.log(err))
})
app.get("/shops", (req, res) => {
    Shop
        .find({})
        .then(shops => res.json(shops))
        .catch(err => console.log(err))
})

app.post("/order", (req, res) => {
    const order = new Order(req.body)
    order
        .save()
        .then(() => res.json({ status: "success" }))
        .catch(err => console.log(err))
})

app.get("/orderhistory", (req, res) => {
    Order
        .find({})
        .then(orders => res.json(orders))
        .catch(err => console.log(err))
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