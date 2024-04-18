<template>
  <div class="listWrap">
    <ul v-for="item in data" :key="item.id">
      <MainItem :item="item" />
    </ul>
  </div>
</template>

<script>
import MainItem from "@/components/Molecules/MainItem.vue";
export default {
  props: ["data"],
  components: { MainItem },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.listWrap {
  padding: 1.5rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}

@media (max-width: 1300px) {
  .listWrap {
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;
  }
}

@media (max-width: 920px) {
  .listWrap {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .listWrap {
    padding: 1rem;
    gap: 0;
  }
}

@media (max-width: 520px) {
  .listWrap {
    grid-template-columns: 1fr;
  }
}
</style>
