<template>
  <div class="tab-control">
    <div v-for="(item, index) in titles" :key="index" :class="{active:currendIndex === index}" @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      currendIndex: 0
    };
  },
  methods:{
    itemClick(index){
      this.currendIndex = index
      this.$emit("tabClick",index)
    }
  }
};
</script>

<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  font-size: 14px;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
}
.tab-control div {
  flex: 1;
}
.tab-control div span {
  padding: 5px;
}
.active {
  color: var(--color-high-text);
}
.active span {
  border-bottom: 2px solid var(--color-high-text);
}
</style>
