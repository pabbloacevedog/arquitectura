import Vue from 'vue'
import VueApollo from 'vue-apollo'
import router from './router'
import Vuetify from 'vuetify'
import { apolloClient } from './apollo/apollo'

import App from './App'
import store from './store/store'

Vue.config.productionTip = false

Vue.use(VueApollo)
Vue.use(Vuetify)

const token = localStorage.getItem('token')

const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
    defaultOptions: {
        $loadingKey: 'loading'
    }
})

/* eslint-disable no-new */
new Vue({
    store: store,
    router: router,
    data: {
        token: token
    },
    el: '#app',
    provide: apolloProvider.provide(),
    template: '<App/>',
    components: { App }
})
