<template>
  <div class="mainBanner">
    <Banner :banner="banner" />
  </div>
</template>

<script>
import Banner from "@/components/Organisms/Banner.vue";
import dummy from "@/assets/db/bannerData.json";

const banner = dummy;

export default {
  components: { Banner },
  data() {
    return {
      banner,
    };
  },
};
</script>

<style lang="scss" scoped>
.mainBanner {
  padding-top: 10rem;
  width: 100%;
  height: 500px;
  margin-bottom: 5rem;
}
</style>
