const mongoose = require("mongoose");

const shopSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    location: {
        type: Array,
        required: true
    }
}, { collection: 'shops' });

const Shop = mongoose.model("shops", shopSchema);
module.exports = Shop;