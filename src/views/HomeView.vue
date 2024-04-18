<template>
  <div class="home">
    <Header />
    <MainBanner />
    <MainList />
    <Footer />
    <Nav />
  </div>
</template>

<script>
// @ is an alias to /src
import MainBanner from "@/components/Templates/MainBanner.vue";
import MainList from "@/components/Templates/MainList.vue";
import Header from "@/components/Shared/Header.vue";
import Footer from "@/components/Shared/Footer.vue";
import Nav from "@/components/Shared/Nav.vue";

export default {
  components: { Header, Footer, MainBanner, MainList, Nav },
};
</script>
