<template>
  <nav class="navWrap">
    <div class="item">
      <router-link to="/"
        ><i class="fa fa-home" aria-hidden="true"></i> HOME</router-link
      >
    </div>

    <div class="item">
      <router-link to="/menu"
        ><i class="fa fa-bars" aria-hidden="true"></i>MENU</router-link
      >
    </div>

    <div class="item">
      <router-link to="/order"
        ><i class="fa fa-solid fa-receipt"></i>ORDER</router-link
      >
    </div>

    <div class="item">
      <router-link to="/login"
        ><i class="fa fa-user" aria-hidden="true"></i>MY</router-link
      >
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/common.scss";

.navWrap {
  @include flexSB;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  height: 100px;
  border-top: 1px solid #000;
  z-index: 99;
  background-color: rgba(255, 255, 255, 0.95);

  .item {
    @include flexCenter;
    width: 25%;
    height: 100%;
    padding-top: 0.5rem;

    a {
      @include flexCenter_c;
      display: flex;
      flex-direction: column;
      align-items: center;

      .fa {
        transform: scale(2, 2);
        margin-bottom: 0.7rem;
      }
    }
  }
}
</style>
