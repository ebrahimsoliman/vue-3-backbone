export default {
    loading(context, payload) {
        context.commit('loading', payload)
    },
    modal(context, payload) {
        context.commit('modal', payload)
    },
    modalTitle(context, payload) {
        context.commit('modalTitle', payload)
    },
    modalDesc(context, payload) {
        context.commit('modalDesc', payload)
    },
    toast(context, payload) {
        context.commit('toast', payload)
    },
    toastTitle(context, payload) {
        context.commit('toastTitle', payload)
    },
    toastDesc(context, payload) {
        context.commit('toastDesc', payload)
    },
    toastImage(context, payload) {
        context.commit('toastImage', payload)
    },

};
