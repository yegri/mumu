<template>
  <transition-group tag="ul" class="listWrap">
    <template v-for="item in data">
      <div
        v-if="categoryType === 'all' || item.category === categoryType"
        :key="item.id"
      >
        <MainItem :item="item" />
      </div>
    </template>
  </transition-group>
</template>

<script>
import MainItem from "@/components/Molecules/MainItem.vue";
export default {
  props: ["data", "categoryType"],
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

/* 트랜지션 전용 스타일 */
.v-enter-active,
.v-leave-active,
.v-move {
  transition: opacity 1s, transform 1s;
}
.v-leave-active {
  position: absolute;
}
.v-enter {
  opacity: 0;
  transform: translateY(-20px);
}
.v-leave-to {
  opacity: 0;
  transform: translateY(20px);
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
