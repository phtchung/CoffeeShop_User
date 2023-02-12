import Vue from 'vue'
import Vuex from 'vuex'
// import axios from "axios";
import CustomGoogleAutocomplete from 'vue-custom-google-autocomplete'
Vue.use(CustomGoogleAutocomplete)
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        authenticated:false,
        Sidebar_drawer: null,
        Customizer_drawer: false,
        SidebarColor: 'white',
        SidebarBg: '',
        product_detail:[],
      },

    mutations: {
        SET_SIDEBAR_DRAWER (state, payload) {
            state.Sidebar_drawer = payload
        },
        SET_CUSTOMIZER_DRAWER (state, payload) {
            state.Customizer_drawer = payload
        },
        SET_SIDEBAR_COLOR (state, payload) {
            state.SidebarColor = payload
        },
        SET_PRODUCT_DETAIL(state, value) {
            return state.product_detail = value
        },
        SET_AUTH(state,auth){
            return state.authenticated = auth
        },
    },
    actions: {
        product_Detail({ commit }, value) {
           commit('SET_PRODUCT_DETAIL', value);
        },
        setAuth({commit}, auth){
            commit('SET_AUTH',auth);
        },
    }
})