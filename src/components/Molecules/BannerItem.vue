<template>
  <li class="itemWrap">
    <img :src="require(`@/assets/images/banners/${img}.webp`)" />
  </li>
</template>

<script>
export default {
  props: ["item"],

  data() {
    return {
      img: this.item.bannerImg,
    };
  },
};
</script>

<style lang="scss" scoped>
.itemWrap {
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
