import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";


export default {
    state() {
        {
            return {
                loading: false,
                modal: false,
                modalTitle: '',
                modalDesc: '',
                toast: false,
                toastTitle: '',
                toastDesc: '',
                toastImage: 'logo.png',
                toastClass: 'text-white bg-primary'
            }
        }
    },
    mutations,
    actions,
    getters
};
