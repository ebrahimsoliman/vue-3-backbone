import {createStore} from "vuex";
import productsModule from "./products/index";
import meetupsModule from "./Meetups/index";


export default createStore({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        prod: productsModule,
        meet: meetupsModule
    }
});
