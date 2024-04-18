<template>
  <div @click="goTop" class="scrollTop" v-show="isScrollDown">
    <img
      src="@/assets/images/icons/up-arrow.png"
      alt="top버튼"
      class="topBtn"
    />
  </div>
</template>

<script>
export default {
  props: ["parentHeight"],

  data() {
    return {
      nowScrollY: 0,
      setHeight: 100,
      nowHeight: 0,
      isScrollDown: false, // v-show를 통해 맨위로 버튼을 등장시키는 변수
    };
  },

  methods: {
    goTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    windowScrollY() {
      this.nowScrollY = window.scrollY;

      if (this.nowScrollY > 200) {
        this.isScrollDown = true;
      } else {
        this.isScrollDown = false;
      }
    },
  },

  mounted() {
    window.addEventListener("scroll", this.windowScrollY);
    this.windowScrollY();
  },

  watch: {
    nowScrollY: {
      handler() {
        this.scrolled = this.nowScrollY >= this.nowHeight;
      },
    },
    parentHeight: {
      handler() {
        this.nowHeight =
          this.parentHeight - window.innerHeight <= this.setHeight
            ? 0
            : this.setHeight;

        this.scrolled = this.nowScrollY >= this.nowHeight;
      },
    },
  },
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

  .topBtn {
    background-color: #fff;
    border-radius: 50%;
  }
}
</style>
