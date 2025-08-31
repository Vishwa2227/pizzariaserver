const express = require("express");
const router = express.Router();
const Pizza = require("../models/Pizza");

router.get("/", async (req, res) => {
  try {
    const pizzas = await Pizza.find();
    res.json(pizzas);
  } catch (error) {
    res.status(500).json({ message: "Error fetching pizzas", error });
  }
});

module.exports = router;
