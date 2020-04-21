<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="itemIcon"></slot>
    </div>
    <div v-else>
      <slot name="itemIconActive"></slot>
    </div>
    <div :style="isActiveColor">
      <slot name="itemText"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    link: String,
    fontColor: {
      type: String,
      default: "red"
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.link) !== -1;
    },
    isActiveColor(){
      return this.isActive ? {color: this.fontColor} : {}
    }
  },
  methods: {
    itemClick() {
      this.$router.replace(this.link).catch(error => error);
    }
  }
};
</script>

<style scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin: 3px 0 2px;
  vertical-align: middle;
}
.active {
  color: red;
}
</style>
