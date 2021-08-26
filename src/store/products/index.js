import mutations   from "./mutations.js";
import actions     from "./actions.js";
import getters     from "./getters.js";
import { Product } from "./Product";

export default {
  state() {
    return {
      product: [new Product("cheese",
                            3,
                            20),
                new Product("milk",
                            1,
                            8),
                new Product("water", 4, 5)]

    };
  },
  mutations,
  actions,
  getters
};
