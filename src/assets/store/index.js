import { createStore } from "vuex";
import loginStore from "./loginStore";
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    loginStore,
  },
});
