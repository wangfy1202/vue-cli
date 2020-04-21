<template>
  <div>
    <NavBar class="home-nav">
      <div slot="conter">购物街</div>
    </NavBar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import { getHomeMultidata } from "network/home";
export default {
  name:"Home",
  components:{
    NavBar
  },
  data(){
    return{
      banners:null,
      recommends:null
    }
  },
  created(){
    getHomeMultidata().then(res => {
      console.log(res)
      this.banners = res.data.banner.list
      this.recommends = res.data.recommend.list
    })
  }
}
</script>

<style scoped>
.home-nav{
  background-color: var(--color-tint);
  color: #fff;
}
</style>
