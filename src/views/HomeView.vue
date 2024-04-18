<template>
  <div class="home" ref="parent">
    <Header />
    <MainBanner />

    <!-- 카테고리 -->
    <Category />

    <MainList />
    <Footer />

    <!-- Top 버튼 -->
    <ScrollTopBtn />
    <Nav />
  </div>
</template>

<script>
// @ is an alias to /src
import MainBanner from "@/components/Templates/MainBanner.vue";
import MainList from "@/components/Templates/MainList.vue";
import Header from "@/components/Shared/Header.vue";
import Footer from "@/components/Shared/Footer.vue";
import ScrollTopBtn from "@/components/Atoms/ScrollTopBtn.vue";
import Category from "@/components/Shared/Category.vue";
import Nav from "@/components/Shared/Nav.vue";

export default {
  components: {
    Header,
    Footer,
    MainBanner,
    MainList,
    ScrollTopBtn,
    Nav,
    Category,
  },
  data() {
    return {};
  },
};
</script>
