export default {
  setProduct(state,
           payload) {
    // state.product = payload.product;
    state.product.push(payload)
  },


};
