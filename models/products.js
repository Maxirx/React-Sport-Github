const mongoose = require("mongoose");

const ProductsSchema = new mongoose.Schema({
  type: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  size: { type: String, required: true },
  stock: { type: Number, required: true },
  color: { type: String },
  sport: { type: String, required: true },
  productName: { type: String, required: true },
  genre: { type: String, required: true },
  brand: { type: mongoose.Schema.Types.String, ref: "brand" },
});

const Products = mongoose.model("products", ProductsSchema);
module.exports = Products;
