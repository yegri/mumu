<template>
  <!-- isScrollDown이 true일 때 categoryTop 클래스 적용 -->
  <nav class="categoryWrap" :class="{ categoryTop: isScrollDown }">
    <ul>
      <li><router-link to="/">아우터</router-link></li>
      <li><router-link to="/">상의</router-link></li>
      <li><router-link to="/">신발</router-link></li>
      <li><router-link to="/">가방</router-link></li>
      <li><router-link to="/">잡화</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Category",
  data() {
    return {
      nowScrollY: 0,
      isScrollDown: false,
      nav: "",
      navTop: 0,
    };
  },

  methods: {
    windowScrollY() {
      this.nowScrollY = window.scrollY;

      if (this.nowScrollY > 600) {
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

  beforeDestroy() {
    window.addEventListener("scroll", this.windowScrollY);
  },
};
</script>

<style lang="scss" scoped>
.categoryWrap {
  padding: 1rem;
  border-top: 1px solid #222222;
  border-bottom: 1px solid #222222;
  margin-bottom: 3rem;
  transition: all 0.5s;

  ul {
    display: flex;

    li {
      margin-right: 1.5rem;
      font-weight: 900;
      font-size: 1.1rem;

      a {
        display: block;
      }
    }
  }
}

.categoryTop {
  position: sticky;
  top: 130px;
  background-color: rgba(0, 0, 0, 0.9);
  border-top: 1px solid #fff;
  z-index: 1000;
  transition: all 0.5s;
  transform: translateY(-15px);

  ul {
    li {
      a {
        color: #fff;
      }
    }
  }
}
</style>
