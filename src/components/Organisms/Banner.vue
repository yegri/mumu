<template>
  <ul class="swiperWrap">
    <swiper ref="filterSwiper" :options="swiperOption" role="tablist">
      <swiper-slide v-for="item in banner" :key="item.id" role="tab">
        <BannerItem :item="item"
      /></swiper-slide>
      <!-- pagination -->
      <div class="swiper-pagination" slot="pagination"></div>

      <!-- navigation -->
      <div class="swiper-button-prev swiper-btn-prev" slot="button-prev"></div>
      <div class="swiper-button-next swiper-btn-next" slot="button-next"></div>
    </swiper>
  </ul>
</template>

<script>
import BannerItem from "@/components/Molecules/BannerItem.vue";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import Vue from "vue";
import VueAwesomeSwiper from "vue-awesome-swiper";
Vue.use(VueAwesomeSwiper);

export default {
  props: ["banner"],
  components: { BannerItem, swiper, swiperSlide },
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 0, // swiper-slide 사이의 간격 지정
        slidesOffsetBefore: 0, // slidesOffsetBefore는 첫번째 슬라이드의 시작점에 대한 변경할 때 사용
        slidesOffsetAfter: 0, // slidesOffsetAfter는 마지막 슬라이드 시작점 + 마지막 슬라이드 너비에 해당하는 위치의 변경이 필요할 때 사용
        centerInsufficientSlides: true, // 컨텐츠의 수량에 따라 중앙정렬 여부를 결정함
        pagination: {
          el: ".swiper-pagination",
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
@import "swiper/dist/css/swiper.css";

.swiperWrap {
  width: 100%;
  height: 100%;

  .swiper-container {
    width: 100%;
    height: 100%;

    .swiper-slide {
      width: 100vw;
      height: 100%;
    }
  }
}
</style>
