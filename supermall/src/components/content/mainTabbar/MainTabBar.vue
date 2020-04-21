<template>
  <TabBar>
    <TabBarItem link="/home" fontColor="#d81e06">
      <img src="~assets/img/tabbar/home.svg" slot="itemIcon" />
      <img src="~assets/img/tabbar/home_active.svg" slot="itemIconActive" />
      <div slot="itemText">首页</div>
    </TabBarItem>
    <TabBarItem link="/category" fontColor="#d81e06">
      <img src="~assets/img/tabbar/category.svg" slot="itemIcon" />
      <img src="~assets/img/tabbar/category_active.svg" slot="itemIconActive" />
      <div slot="itemText">分类</div>
    </TabBarItem>
    <TabBarItem link="/cart" fontColor="#d81e06">
      <img src="~assets/img/tabbar/shopcart.svg" slot="itemIcon" />
      <img src="~assets/img/tabbar/shopcart_active.svg" slot="itemIconActive" />
      <div slot="itemText">购物车</div>
    </TabBarItem>
    <TabBarItem link="/profile" fontColor="#d81e06">
      <img src="~assets/img/tabbar/profile.svg" slot="itemIcon" />
      <img src="~assets/img/tabbar/profile_active.svg" slot="itemIconActive" />
      <div slot="itemText">我的</div>
    </TabBarItem>
  </TabBar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";
export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem
  }
};
</script>

<style scoped>
</style>
