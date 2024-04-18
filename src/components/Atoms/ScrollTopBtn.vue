<template>
  <div @click="goTop" class="scrollTop">
    <img
      src="@/assets/images/icons/up-arrow.png"
      alt="top버튼"
      class="topBtn"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrolled: false,
      nowScrollY: 0,
      setHeight: 100,
      nowHeight: 0,
    };
  },

  methods: {
    goTop() {
      window.scrollTop(0, 0);
    },
    windowScrollY() {
      this.nowScrollY = window.scrollY;
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
