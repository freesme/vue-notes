<template>
  <Tabbar>
    <TabBarItem path="/home">
      <img slot="item-icon" src="../../assets/img/tabbar/home.svg">
      <img slot="item-icon-active" src="../../assets/img/tabbar/home_active.svg">
      <div slot="item-text">首页</div>
    </TabBarItem>
    <TabBarItem path="/category">
      <img slot="item-icon" src="../../assets/img/tabbar/category.svg">
      <img slot="item-icon-active" src="../../assets/img/tabbar/category_active.svg">
      <div slot="item-text">分类</div>
    </TabBarItem>
    <TabBarItem path="/shopcart">
      <img slot="item-icon" src="../../assets/img/tabbar/shopcart.svg">
      <img slot="item-icon-active" src="../../assets/img/tabbar/shopcart_active.svg">
      <div slot="item-text">购物车</div>
    </TabBarItem>
    <TabBarItem  path="/profile">
      <img slot="item-icon" src="../../assets/img/tabbar/profile.svg">
      <img slot="item-icon-active" src="../../assets/img/tabbar/profile_active.svg">
      <div slot="item-text">我的</div>
    </TabBarItem>
  </Tabbar>
</template>

<script>
  import Tabbar from '../../components/tabbar/Tabbar'
  import TabBarItem from '../../components/tabbar/TabBarItem'
    export default {
        name: "MainTabBar",
        components:{
          Tabbar,
          TabBarItem
        }
    }
</script>

<style scoped>

</style>
