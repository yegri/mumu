<template>
  <header class="header">
    <img src="../../assets/images/logo.jpg" alt="로고" />
  </header>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/common.scss";

.header {
  @include flexCenter;
  background-color: #000;
  max-height: 120px;
  height: 100%;
  position: fixed;
  width: 100%;
  z-index: 99;

  img {
    max-width: 180px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
