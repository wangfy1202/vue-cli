<template>
  <div class="nar-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="conter">
      <slot name="conter"></slot>
    </div>
    <div class="rigth">
      <slot name="rigth"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style scoped>
.nar-bar {
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
  box-shadow: 0 1px 1px rgba(100,100,100,.1);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
}
.left,
.rigth {
  width: 60px;
}
.conter {
  flex: 1;
}
</style>
