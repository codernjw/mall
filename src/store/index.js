import { createStore } from 'vuex'
import getters from './getters'

export default createStore({
    state: {
        cartlist: []
    },
    mutations: {
        addcount(state, payload) {
            payload.count++
        },
        addtocart(state, payload) {
            payload.checked = true;
            state.cartlist.push(payload)
        }
    },
    actions: {
        addcart(context, payload) {
            // state.cartlist.push(payload);
            // console.log(state.cartlist);
            return new Promise((resolve, reject) => {
                let oldprice = context.state.cartlist.find(item => item.iid === payload.iid)
                if (oldprice) {
                    context.commit('addcount', oldprice)
                    resolve('当前商品数量+1')
                } else {
                    payload.count = 1;
                    context.commit('addtocart', payload)
                    resolve('添加了新的商品')
                }
            })
        }
    },
    modules: {},
    getters,
})