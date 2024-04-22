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
      <router-link to="/login" v-if="!userData"
        ><i class="fa fa-regular fa-user"></i>LOGIN</router-link
      >
      <router-link to="/mypage" v-else
        ><i class="fa fa-solid fa-user"></i>MY</router-link
      >
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      userData: "",
    };
  },

  created() {
    const getUserData = localStorage.getItem("id");

    // 값이 없는 경우 null이 반환 -> 값이 없을 때는 공백을 넣어서 null이 되지 않도록 설정
    const loginUserData = getUserData ? JSON.parse(getUserData) : "";

    if (loginUserData.userId) {
      this.userData = loginUserData.userId;
    }
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
