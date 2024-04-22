import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo: null,
    isLogin: false,
    isAutoLogin: false,
  },
  mutations: {
    loginSuccess(state, payload) {
      state.isLogin = true;
      state.userInfo = payload;
    },
    autoLogin(state) {
      state.isAutoLogin = true;
    },
    logout(state) {
      state.isLogin = false;
      state.userInfo = null;
      localStorage.removeItem("id");
    },
  },
  getters: {},
  actions: {
    login(context, loginData) {},
  },
});
