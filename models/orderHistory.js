const mongoose = require("mongoose");

const Schema = mongoose.Schema

const orderSchema = new Schema({
    orderSum: Number,
    address: String,
    shop: Array,
    order: {
        type: Array,
        required: true,
    },
    user: {
        type: Object,
        required: true
    }

}, { timestamps: true });

const Order = mongoose.model("order", orderSchema);
module.exports = Order;