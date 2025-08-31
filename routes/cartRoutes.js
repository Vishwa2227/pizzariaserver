const express = require("express");
const router = express.Router();
const ShoppingCart = require("../models/ShoppingCart");

// Get all cart items
router.get("/", async (req, res) => {
  try {
    const items = await ShoppingCart.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: "Error fetching cart items", error });
  }
});

// Add item to cart
router.post("/", async (req, res) => {
  try {
    const newItem = new ShoppingCart(req.body);
    await newItem.save();
    res.status(201).json({ message: "Item added to cart", item: newItem });
  } catch (error) {
    res.status(500).json({ message: "Error adding item to cart", error });
  }
});

// Update cart item
router.put("/:id", async (req, res) => {
  try {
    const updatedItem = await ShoppingCart.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedItem);
  } catch (error) {
    res.status(500).json({ message: "Error updating item", error });
  }
});

// Delete cart item
router.delete("/:id", async (req, res) => {
  try {
    await ShoppingCart.findByIdAndDelete(req.params.id);
    res.json({ message: "Item removed from cart" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting item", error });
  }
});

module.exports = router;
