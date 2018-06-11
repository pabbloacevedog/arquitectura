import Vue from 'vue'
import Vuex from 'vuex'
import { apolloClient } from '../apollo/apollo'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        isLoggedIn: !!localStorage.getItem('token'),
        dataUser: {},
        userId: ''
    },
    actions: {
        apolloShow () {
            console.log(apolloClient)
        }
    }
})

export default store
