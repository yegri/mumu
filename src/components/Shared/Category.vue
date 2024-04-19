<template>
  <!-- isScrollDown이 true일 때 categoryTop 클래스 적용 -->
  <nav class="categoryWrap" :class="{ categoryTop: isScrollDown }">
    <ul>
      <li @click="$emit('setCategory', 'all')">전체</li>
      <li @click="$emit('setCategory', 'outwear')">아우터</li>
      <li @click="$emit('setCategory', 'top')">상의</li>
      <li @click="$emit('setCategory', 'footwear')">신발</li>
      <li @click="$emit('setCategory', 'bags')">가방</li>
      <li @click="$emit('setCategory', 'stuff')">잡화</li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Category",
  props: ["categoryType"],
  data() {
    return {
      nowScrollY: 0,
      isScrollDown: false,
      navTop: 0,
    };
  },

  methods: {
    // 스크롤 이벤트
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
      cursor: pointer;
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
  transform: translateY(-12px);

  ul {
    li {
      color: #fff;
    }
  }
}
</style>
