<template>
  <div class="home" ref="parent">
    <Header />
    <MainBanner />
    <MainList />
    <Footer />

    <!-- Top 버튼 -->
    <ScrollTopBtn :parentHeight="parentHeight" />
    <Nav />
  </div>
</template>

<script>
// @ is an alias to /src
import MainBanner from "@/components/Templates/MainBanner.vue";
import MainList from "@/components/Templates/MainList.vue";
import Header from "@/components/Shared/Header.vue";
import Footer from "@/components/Shared/Footer.vue";
import ScrollTopBtn from "@/components/Atoms/ScrollTopBtn";
import Nav from "@/components/Shared/Nav.vue";

export default {
  components: { Header, Footer, MainBanner, MainList, ScrollTopBtn, Nav },
  data() {
    return {
      nowScrollY: 0,
      parentHeight: 0,
    };
  },
  async created() {
    window.addEventListener("scroll", this.windowScrollY);
  },

  updated() {
    // 화면에 추가된 후 동작하도록
    this.$nextTick(() => {
      this.parentHeight = this.$refs.parent.clientHeight;
    });
  },

  methods: {
    windowScrollY() {
      let scroll = window.scrollY || window.pageYOffset;
      sessionStorage.setItem("nowScroll", scroll);
      this.nowScrollY = window.scrollY;
    },
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.windowScrollY);
  },
};
</script>
