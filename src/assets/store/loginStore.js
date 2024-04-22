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
    login(context, loginData) {
      if (loginData.userId === "test" && loginData.userPassword === "test") {
        localStorage.setItem("id", JSON.stringify(loginData));
        context.commit("loginSuccess", loginData);
        alert("로그인이 완료되었습니다.");
        window.location.replace("/");
      } else {
        alert("아이디 또는 패스워드가 틀립니다. 다시 시도해주세요.");
      }
    },
  },
});
