<template>
  <div class="home" ref="parent">
    <!-- 배너 -->
    <MainBanner />

    <!-- 카테고리 -->
    <Category :categoryType="categoryType" @setCategory="setCategory" />

    <!-- 상품 리스트 -->
    <MainList :categoryType="categoryType" />
  </div>
</template>

<script>
// @ is an alias to /src
import MainBanner from "@/components/Templates/MainBanner.vue";
import MainList from "@/components/Templates/MainList.vue";
import Category from "@/components/Shared/Category.vue";
import Nav from "@/components/Shared/Nav.vue";

export default {
  components: {
    MainBanner,
    MainList,
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
