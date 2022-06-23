import axios from "axios";

const productsActions = {
  addProduct: (productData) => {
    return async (dispatch, getState) => {
      try {
        const res = await axios.post(`http://localhost:4000/api/allGoods/`, {
          productData,
        });
        dispatch({
          type: "message",
          payload: {
            view: true,
            message: "Product uploaded",
            success: res.data.success,
          },
        });
        return res;
      } catch (error) {
        console.log(error);
      }
    };
  },

  modifyProduct: (prodId, toModifyProduct) => {
    return async (dispatch, getState) => {
      try {
        const res = await axios.put(
          "http://localhost:4000/api/allGoodsId/" + prodId,
          { ...toModifyProduct }
        );
        dispatch({
          type: "message",
          payload: {
            view: true,
            message: res.data.message,
            success: res.data.success,
          },
        });

        return res;
      } catch (err) {
        console.log(err);
      }
    };
  },

  deleteProduct: (id) => {
    return async (dispatch, getState) => {
      const res = await axios.delete(
        `http://localhost:4000/api/allGoodsId/${id}`
      );
      dispatch({
        type: "message",
        payload: {
          view: true,
          message: "The product has been deleted!",
          success: res.data.success,
        },
      });
      return res;
    };
  },
};

export default productsActions;
