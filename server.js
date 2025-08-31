const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/PIZZARIADB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log(" Connected to MongoDB"))
  .catch(err => console.error(" MongoDB connection error:", err));

// Import routes
const pizzaRoutes = require("./routes/pizzaRoutes");
const ingredientRoutes = require("./routes/ingredientRoutes");
const cartRoutes = require("./routes/cartRoutes");

// Use routes
app.use("/pizzas", pizzaRoutes);
app.use("/ingredients", ingredientRoutes);
app.use("/shoppingcart", cartRoutes);

// Start Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
});
