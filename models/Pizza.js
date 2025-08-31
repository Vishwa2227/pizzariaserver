const mongoose = require("mongoose");

const PizzaSchema = new mongoose.Schema({}, { collection: "Pizzas", strict: false });

module.exports = mongoose.model("Pizza", PizzaSchema);
