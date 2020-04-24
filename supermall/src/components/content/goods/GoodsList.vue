<template>
  <div class="goods">
    <GoodsListItem v-for="(item,index) in goodsList" :key="index" :goodsListItem="item" />
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";
export default {
  name: "GoodsList",
  props: {
    goodsList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    GoodsListItem
  }
};
</script>

<style scoped>
</style>
