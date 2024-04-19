<template>
  <div class="home" ref="parent">
    <!-- 헤더 -->
    <Header />

    <!-- 배너 -->
    <MainBanner />

    <!-- 카테고리 -->
    <Category :categoryType="categoryType" @setCategory="setCategory" />

    <!-- 상품 리스트 -->
    <MainList :categoryType="categoryType" />

    <!-- 푸터 -->
    <Footer />

    <!-- Top 버튼 -->
    <ScrollTopBtn />

    <!-- 하단 nav -->
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
    return {
      categoryType: "all",
    };
  },

  methods: {
    setCategory(value) {
      this.categoryType = value;
    },
  },
};
</script>
