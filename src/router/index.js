import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/LoginView.vue"),
  },
  {
    path: "/menu",
    name: "menu",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/MenuView.vue"),
  },
  {
    path: "/order",
    name: "order",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/OrderView.vue"),
  },
  {
    path: "/mypage",
    name: "mypage",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/MyPageView.vue"),

    beforeEnter: function (to, from, next) {
      const getUserData = localStorage.getItem("id");

      // 값이 없는 경우 null이 반환 -> 값이 없을 때는 공백을 넣어서 null이 되지 않도록 설정
      const loginUserData = getUserData ? JSON.parse(getUserData) : "";

      if (!loginUserData) {
        // 이동할 페이지에 인증 정보가 필요하면 경고 창을 띄우고 페이지 전환은 하지 않음
        alert("로그인 해주세요!");
        window.location.replace("/login");
      } else {
        console.log("routing success : '" + to.path + "'");
        next(); // 페이지 전환
      }
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
