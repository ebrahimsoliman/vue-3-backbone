export default {
  async addProduct(context,
                   payload) {
    if (payload.quantity <= 0) {
      return;
    }

    else {
      context.commit("setProduct", payload)
    }
  }

};
