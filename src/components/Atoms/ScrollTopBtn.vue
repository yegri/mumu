<template>
  <div @click="goTop" class="scrollTop" :class="{ btnShow: isScrollDown }">
    <img
      src="@/assets/images/icons/up-arrow.png"
      alt="top버튼"
      class="topBtn"
    />
  </div>
</template>

<script>
export default {
  name: "ScrollTopBtn",
  data() {
    return {
      nowScrollY: 0,
      isScrollDown: false, // v-show를 통해 맨위로 버튼을 등장시키는 변수
    };
  },

  methods: {
    goTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    windowScrollY() {
      // 이벤트가 발생하는 곳의 scroll값 가져오기
      this.nowScrollY = window.scrollY;

      if (this.nowScrollY > 200) {
        this.isScrollDown = true;
      } else {
        this.isScrollDown = false;
      }
    },
  },

  // 가상 DOM이 마운트될 때, 이벤트 리스너 등록하기 + 이벤트 연결
  // DOM 생성 후에 이벤트를 달아야 하기 때문에, created()가 아닌 mounted()를 해야함
  mounted() {
    window.addEventListener("scroll", this.windowScrollY);
    this.windowScrollY();
  },

  // 페이지 이동(마운트 해제 전) 되기 전에, 이벤트 리스너 삭제하기
  // 이벤트를 삭제하지 않으면, 해당 이벤트가 계속 등록되어 있어서 사이드 이펙트가 발생할 수 있음
  beforeDestroy() {
    window.addEventListener("scroll", this.windowScrollY);
  },
};
</script>

<style lang="scss" scoped>
.scrollTop {
  position: fixed;
  top: calc(90% - 100px);
  right: 22px;
  z-index: 100;
  opacity: 0;
  transition: all 0.3s;

  .topBtn {
    background-color: #fff;
    border-radius: 50%;
  }
}

.btnShow {
  opacity: 1;
}
</style>
