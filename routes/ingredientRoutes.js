const express = require("express");
const router = express.Router();
const Ingredient = require("../models/Ingredient");

router.get("/", async (req, res) => {
  try {
    const ingredients = await Ingredient.find();
    res.json(ingredients);
  } catch (error) {
    res.status(500).json({ message: "Error fetching ingredients", error });
  }
});

module.exports = router;
