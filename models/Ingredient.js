const mongoose = require("mongoose");

const IngredientSchema = new mongoose.Schema({}, { collection: "Ingredients", strict: false });

module.exports = mongoose.model("Ingredient", IngredientSchema);
