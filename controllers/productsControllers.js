const { response } = require("express");
const { ObjectId } = require("mongodb");
const Products = require("../models/products");

const productsControllers = {
  getAllProducts: async (require, response) => {
    var products;
    var error = null;

    try {
      products = await Products.find().populate("brand");
    } catch (err) {
      error = err;
      console.log(error);
    }
    response.json({
      respuesta: error ? "ERROR" : { products },
      success: error ? false : true,
      error: error,
    });
  },
  getAllProductsBrand: async (require, response) => {
    const brandId = require.params.id;

    var error = null;
    var brandsLocal;

    try {
      brandsLocal = await Products.find({ brand: brandId });
    } catch (err) {
      error = err;
      console.log(error);
    }
    response.json({
      respuesta: error ? "ERROR" : { brandsLocal },
      success: error ? false : true,
      error: error,
    });
  },
  addProduct: async (required, response) => {
    console.log(required.body.productData);

    const {
      type,
      description,
      image,
      price,
      size,
      color,
      stock,
      sport,
      productName,
      genre,
      brand,
    } = required.body.productData;

    new Products({
      type,
      description,
      image,
      price,
      size,
      color,
      stock,
      sport,
      productName,
      genre,
      brand,
    })
      .save()
      .then((respuesta) => console.log({ respuesta }))
      .catch((error) => response.json({ error }));
  },

  seeProductForId: async (require, response) => {
    const id = require.params.id;
    var ProductsLocal;

    ProductsLocal = await Products.findOne({ _id: id })
      .then((res) =>
        response.json({ paso: "producto encontrado", respuesta: res })
      )
      .catch((error) => response.json({ paso: "no existe", error }));
  },

  deleteProduct: async (required, response) => {
    const id = required.params.id;

    var deleteProduct;

    deleteProduct = await Products.findOneAndDelete({ _id: id })
      .then((res) => response.json({ paso: "eliminado", respuesta: res }))
      .catch((error) =>
        response.json({ paso: "porfavor vuelva a intentarlo mas tarde", error })
      );
  },

  seeProductForGender: async (require, response) => {
    const gender = require.params.gender;
    var ProductsLocal;
    console.log(typeof gender);
    console.log(gender);

    ProductsLocal = await Products.find({ genre: gender })

      .then((res) =>
        response.json({ paso: "producto encontrado", respuesta: res })
      )
      .then(console.log(ProductsLocal))
      .catch((error) => response.json({ paso: "no existe", error }));
  },

  modifyProduct: async (req, res) => {
    try {
      const modifiedProduct = await Products.findOneAndUpdate(
        { "products._id": req.params.id },
        { $set: req.body },
        { new: true }
      );
      res.json({
        success: true,
        response: { modifiedProduct },
        message: "Your product has been modified",
      });
    } catch (error) {
      console.log(error);
      res.json({
        success: true,
        message: "Something went wrong please try again in a few seconds",
      });
    }
  },

  modifyProduct: async (req, res) => {
    console.log(req.body);

    try {
      const modifiedProduct = await Products.findOneAndUpdate(
        { "products._id": req.params.id },
        { $set: req.body },
        { new: true }
      );
      res.json({
        success: true,
        response: { modifiedProduct },
        message: "Your product has been modified",
      });
    } catch (error) {
      console.log(error);
      res.json({
        success: true,
        message: "Something went wrong please try again in a few seconds",
      });
    }
  },
};

module.exports = productsControllers;
