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
};
</script>

<style>
@import "@/assets/css/global.scss";

#app {
  font-family: "Roboto", sans-serif;
}
</style>
