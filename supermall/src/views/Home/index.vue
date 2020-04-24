<template>
  <div id="home">
    <NavBar class="home-nav">
      <div slot="conter">购物街</div>
    </NavBar>
    <Scroll
      class="content"
      ref="scroll"
      :probeType="3"
      :pullUpLoad="true"
      @scroll="contentScroll"
      @pullingUp="lastMove"
    >
      <HomeSwiper :banners="banners" />
      <RecommendView :recommends="recommends" />
      <FeatureView />
      <div class="tab-control">
        <TabControl :titles="titles" @tabClick="tabClick" />
      </div>
      <GoodsList :goodsList="showGoods" />
      <ul>
        <li>列表1</li>
        <li>列表2</li>
        <li>列表3</li>
        <li>列表4</li>
        <li>列表5</li>
        <li>列表6</li>
        <li>列表7</li>
        <li>列表8</li>
        <li>列表9</li>
        <li>列表10</li>
        <li>列表11</li>
        <li>列表12</li>
        <li>列表13</li>
        <li>列表14</li>
        <li>列表15</li>
        <li>列表16</li>
        <li>列表17</li>
        <li>列表18</li>
        <li>列表19</li>
        <li>列表20</li>
        <li>列表21</li>
        <li>列表22</li>
        <li>列表23</li>
        <li>列表24</li>
        <li>列表25</li>
        <li>列表26</li>
        <li>列表27</li>
        <li>列表28</li>
        <li>列表29</li>
        <li>列表30</li>
        <li>列表31</li>
        <li>列表32</li>
        <li>列表33</li>
        <li>列表34</li>
        <li>列表35</li>
        <li>列表36</li>
        <li>列表37</li>
        <li>列表38</li>
        <li>列表39</li>
        <li>列表40</li>
        <li>列表41</li>
        <li>列表42</li>
        <li>列表43</li>
        <li>列表44</li>
        <li>列表45</li>
        <li>列表46</li>
        <li>列表47</li>
        <li>列表48</li>
        <li>列表49</li>
        <li>列表50</li>
        <li>列表51</li>
        <li>列表52</li>
        <li>列表53</li>
        <li>列表54</li>
        <li>列表55</li>
        <li>列表56</li>
        <li>列表57</li>
        <li>列表58</li>
        <li>列表59</li>
        <li>列表60</li>
        <li>列表61</li>
        <li>列表62</li>
        <li>列表63</li>
        <li>列表64</li>
        <li>列表65</li>
        <li>列表66</li>
        <li>列表67</li>
        <li>列表68</li>
        <li>列表69</li>
        <li>列表70</li>
        <li>列表71</li>
        <li>列表72</li>
        <li>列表73</li>
        <li>列表74</li>
        <li>列表75</li>
        <li>列表76</li>
        <li>列表77</li>
        <li>列表78</li>
        <li>列表79</li>
        <li>列表80</li>
        <li>列表81</li>
        <li>列表82</li>
        <li>列表83</li>
        <li>列表84</li>
        <li>列表85</li>
        <li>列表86</li>
        <li>列表87</li>
        <li>列表88</li>
        <li>列表89</li>
        <li>列表90</li>
        <li>列表91</li>
        <li>列表92</li>
        <li>列表93</li>
        <li>列表94</li>
        <li>列表95</li>
        <li>列表96</li>
        <li>列表97</li>
        <li>列表98</li>
        <li>列表99</li>
        <li>列表100</li>
      </ul>
    </Scroll>
    <BackTop @click.native="backTopClick" v-show="isShowBackTop" />
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";

import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import BackTop from "components/content/backTop/BackTop";

import { getHomeMultidata, getHomeGoods } from "network/home";
import { debounce } from "common/utils";
export default {
  name: "Home",
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    Scroll,
    TabControl,
    GoodsList,
    BackTop
  },
  data() {
    return {
      banners: null,
      recommends: null,
      titles: ["流行", "新款", "精选"],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currendGoods: "pop",
      isShowBackTop: false
    };
  },
  created() {
    this.getHomeMultidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("pop");
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 5000);
    this.$bus.$on("imgLoad", () => {
      // this.$refs.scroll.refresh();
      refresh();
    });
  },
  computed: {
    showGoods() {
      return [...this.banners, ...this.recommends];
      // return this.goods[this.currendGoods].list;
    }
  },
  methods: {
    // 事件监听
    tabClick(index) {
      switch (index) {
        case 0:
          this.currendGoods = "pop";
          break;
        case 1:
          this.currendGoods = "new";
          break;
        case 2:
          this.currendGoods = "sell";
          break;
      }
    },
    backTopClick() {
      console.log("回到顶部");
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    contentScroll(position) {
      // console.log(position);
      this.isShowBackTop = -position.y > 1000;
    },
    lastMove() {
      this.getHomeGoods(this.currendGoods);
    },

    //网络请求
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        console.log(res);
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      let page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        console.log(res);
        this.goods[type].page++;
        // this.goods[type].list.push(...res.data.list)
        this.$refs.scroll.finishPullUp();
        this.$refs.scroll.refresh();
      });
    }
  }
};
</script>

<style scoped>
#home {
  padding: 44px 0 49px;
  height: 100vh;
  position: relative;
}
.content {
  /* height: calc(100%); */
  height: 100%;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
.tab-control {
  position: sticky;
  top: 44px;
}
</style>
