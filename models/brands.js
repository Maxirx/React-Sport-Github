const mongoose = require("mongoose");

const brandSchema = new mongoose.Schema({
  brand: { type: String, required: true },
});

const Brands = mongoose.model("brand", brandSchema);
module.exports = Brands;
