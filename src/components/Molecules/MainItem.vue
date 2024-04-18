<template>
  <li class="itemWrap">
    <div class="image">
      <img :src="require(`@/assets/images/products/${img}.jpg`)" />
    </div>
    <p class="productBrand">{{ item.productBrand }}</p>
    <p class="productName">
      {{ item.productName_ko }}
    </p>
    <p class="productPrice">{{ item.productPrice.toLocaleString() }}</p>
    <div class="likeBox">
      <span><i class="fa fa-heart" aria-hidden="true"></i></span>
      <span class="like">{{ item.like.toLocaleString() }}</span>
    </div>
  </li>
</template>

<script>
export default {
  props: ["item"],

  data() {
    return {
      img: this.item.productImg,
    };
  },
};
</script>

<style lang="scss" scoped>
.itemWrap {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border: 1px solid #fbfbfb;
  transition: all 0.3s;
  height: 500px;

  &:hover {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.05);
  }

  .image {
    width: 100%;
    height: 300px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .productBrand {
    padding-top: 1rem;
    font-weight: 900;
    margin-bottom: 0.2rem;
  }

  .productName {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }

  .productPrice {
    margin-bottom: 0.3rem;
  }

  .like {
    margin-left: 0.5rem;
  }
}

@media (max-width: 520px) {
  .itemWrap {
    height: fit-content;
    padding: 1.5rem 1rem;
  }
}
</style>
