<template>
  <!-- isScrollDown이 true일 때 categoryTop 클래스 적용 -->
  <nav class="categoryWrap" :class="{ categoryTop: isScrollDown }">
    <ul>
      <li @click="$emit('setCategory', 'all')"><button>전체</button></li>
      <li @click="$emit('setCategory', 'outwear')"><button>아우터</button></li>
      <li @click="$emit('setCategory', 'top')"><button>상의</button></li>
      <li @click="$emit('setCategory', 'footwear')"><button>신발</button></li>
      <li @click="$emit('setCategory', 'bags')"><button>가방</button></li>
      <li @click="$emit('setCategory', 'stuff')"><button>잡화</button></li>
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
      button {
        margin-right: 1.5rem;
        font-weight: 900;
        font-size: 1.1rem;
      }
      button:hover {
        color: #555;
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
  transform: translateY(-12px);

  ul {
    li {
      button {
        color: #fff;
      }
    }
  }
}
</style>
