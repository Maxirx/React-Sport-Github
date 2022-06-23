const goodsRouter = require("express").Router();

const productsControllers = require("../controllers/productsControllers");

const {
  getAllProducts,
  getAllProductsBrand,
  addProduct,
  modifyProduct,
  deleteProduct,
  seeProductForId,
  seeProductForGender,
} = productsControllers;

goodsRouter.route("/allGoods").get(getAllProducts).post(addProduct);

goodsRouter.route("/allGoodsFor/brand/:id").get(getAllProductsBrand);

goodsRouter.route("/allGoodsForGender/gender/:gender").get(seeProductForGender);

goodsRouter
  .route("/allGoodsId/:id")
  .get(seeProductForId)
  .delete(deleteProduct)
  .put(modifyProduct);

goodsRouter.route("/allGoodsForGender/gender/:gender").get(seeProductForGender);

module.exports = goodsRouter;
