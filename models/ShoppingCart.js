const mongoose = require("mongoose");

const ShoppingCartSchema = new mongoose.Schema({}, { collection: "shoppingcart", strict: false });

module.exports = mongoose.model("ShoppingCart", ShoppingCartSchema);
