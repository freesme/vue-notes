<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
  import MainTabBar from './components/tabbar/MainTabBar'
  export default {
    name: 'App',
    components: {
      MainTabBar,
    }
  }
</script>

<style>
  /*style中引用代码使用@import*/
  @import "./assets/css/base.css";
</style>
