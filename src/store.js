import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import storeConfig from './store/index'


const store = new Vuex.Store(storeConfig)
export default store