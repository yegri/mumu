<template>
  <div id="app">
    <!-- 헤더 -->
    <Header></Header>

    <router-view />

    <!-- 푸터 -->
    <Footer></Footer>

    <!-- Top 버튼 -->
    <ScrollTopBtn />

    <!-- 하단 Nav -->
    <Nav />
  </div>
</template>

<script>
import Header from "@/components/Shared/Header.vue";
import Footer from "@/components/Shared/Footer.vue";
import Nav from "@/components/Shared/Nav.vue";
import ScrollTopBtn from "@/components/Atoms/ScrollTopBtn.vue";

export default {
  components: {
    Header,
    Footer,
    Nav,
    ScrollTopBtn,
  },

  // data와 events가 활성화되어 접근 가능
  // 컴포넌트 초기에 세팅되어야할 데이터 패치는 이 단계에서 사용
  created() {
    const getUserData = localStorage.getItem("id");

    // 값이 없는 경우 null이 반환 -> 값이 없을 때는 공백을 넣어서 null이 되지 않도록 설정
    const loginUserData = getUserData ? JSON.parse(getUserData) : "";

    if (loginUserData.userId) {
      this.userData = loginUserData.userId;
    }
  },
};
</script>

<style>
@import "@/assets/css/global.scss";

#app {
  font-family: "Roboto", sans-serif;
}
</style>
