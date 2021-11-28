export default {
    loading(state,
            payload) {
        state.loading = payload;
    }, modal(state,
             payload) {
        state.modal = payload;
    }, modalTitle(state,
                  payload) {
        state.modalTitle = payload;
    }, modalDesc(state,
                 payload) {
        state.modalDesc = payload;
    }, toast(state,
             payload) {
        state.toast = payload;
    }, toastTitle(state,
                  payload) {
        state.toastTitle = payload;
    }, toastDesc(state,
                 payload) {
        state.toastDesc = payload;
    }, toastImage(state,
                  payload) {
        state.toastImage = payload;
    }, toastClass(state,
                  payload) {
        state.toastClass = payload;
    },
};
