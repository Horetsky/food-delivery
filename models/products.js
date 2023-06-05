const mongoose = require("mongoose");

const Schema = mongoose.Schema

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    shop: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    }
});

const Product = mongoose.model("products", productSchema);
module.exports = Product;