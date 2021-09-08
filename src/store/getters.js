export default {
    cartlength(state) {
        return state.cartlist.length;
    },
    cartlist(state) {
        return state.cartlist;
    },
    cartCount(state) {
        return state.cartlist.filter(item => item.checked).length;
    }
}