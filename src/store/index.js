import Vue from 'vue'
import vuex from 'vuex'
import myWord from './modules/myWord'
Vue.use(vuex);

export default new vuex.Store({
    modules: {
        myWord
    }
})
