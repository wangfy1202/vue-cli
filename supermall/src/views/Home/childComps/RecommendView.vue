<template>
  <ul class="recommend">
    <li v-for="(item, index) in recommends" :key="index">
      <a :href="item.link">
        <img :src="item.image" />
        <span>{{item.title}}</span>
      </a>
    </li>
  </ul>
</template>
<script>
export default {
  name:"RecommendView",
  props:{
    recommends:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
.recommend{
  display: flex;
  width: 100%;
}
.recommend li{
  list-style: none;
  flex: 1;
  width: 25%;
  padding: 5px;
  text-align: center;
  border-bottom: 8px solid #eee;
}
.recommend li a{
  display: inline-block;
}
.recommend li img{
  width: 100%;
  margin-bottom: 5px;
}
.recommend li span{
  font-size: 12px;
}
</style>
