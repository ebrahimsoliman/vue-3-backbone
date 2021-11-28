import {createStore} from "vuex";
import productsModule from "./products/index";
import meetupsModule from "./Meetups/index";
import uiModule from "./Ui/index";
import authModule from './Auth/index'


export default createStore({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        prod: productsModule,
        meet: meetupsModule,
        ui: uiModule,
        auth: authModule,
    }
});
