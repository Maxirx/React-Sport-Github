const Brand = require("../models/brands");

const brandControllers = {
  getAllbrands: async (require, response) => {
    var brandLocal;
    var error = null;

    try {
      brandLocal = await Brand.find();
      console.log(brandLocal);
    } catch (err) {
      error = err;
      console.log(error);
    }
    response.json({
      respuesta: error ? "ERROR" : { brandLocal },
      success: error ? false : true,
      error: error,
    });
  },
  addbrand: async (required, response) => {
    const { brand } = required.body;
    new Brand({
      brand,
    })
      .save()
      .then((respuesta) => response.json({ respuesta }))
      .catch((error) => response.json({ error }));
  },

  seebrandForId: async (require, response) => {
    const id = require.params.id;
    var brandLocal;

    brandLocal = await Brand.findOne({ _id: id })
      .then((res) => response.json({ paso: "listo", respuesta: res }))
      .catch((error) => response.json({ error }));
  },
};

module.exports = brandControllers;
