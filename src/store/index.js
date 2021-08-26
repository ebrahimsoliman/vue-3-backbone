import { createStore } from "vuex";
import productsModule  from "./products/index";

export default createStore({
                             state    : {},
                             mutations: {},
                             actions  : {},
                             modules  : { prod: productsModule }
                           });
