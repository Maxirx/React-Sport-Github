const brandRouter = require("express").Router();

const brandControllers = require("../controllers/brandControllers");

const { getAllbrands, addbrand, modifybrand, deletebrand, seebrandForId } =
  brandControllers;

brandRouter.route("/allBrand").get(getAllbrands).post(addbrand);

brandRouter
  .route("/allBrandId/:id")

  .get(seebrandForId);

module.exports = brandRouter;
