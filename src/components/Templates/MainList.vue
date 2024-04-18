<template>
  <div>
    <h2>상품 목록 (총 {{ product.length }}개)</h2>
    <List :data="product" />
  </div>
</template>

<script>
import List from "@/components/Organisms/List.vue";
import dummy from "@/assets/db/productData.json";
const product = dummy;

export default {
  components: { List },
  data() {
    return {
      product,
    };
  },
};
</script>

<style lang="scss" scoped>
h2 {
  margin-left: 1rem;
}
</style>
