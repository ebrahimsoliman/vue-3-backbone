export default {
    user(state) {
        return state.user;
    },
    isAuthenticated() {
        if ( localStorage.getItem('user') == null) {
            return false
        }
        else {
            return true
        }
    }
};
