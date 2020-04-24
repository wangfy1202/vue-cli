<template>
  <div class="goods">
    <img :src="goodsListItem.image" @load="imgLoad" />
    <div>商品标题</div>
    <span>199.00</span>
    <span>12345</span>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsListItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods:{
    imgLoad(){
      this.$bus.$emit("imgLoad")
    }
  }
};
</script>

<style scoped>
.goods{
  width: 50%;
  float: left;
  padding: 0 5px;
}
.goods img{
  width: 100%;
}
</style>
