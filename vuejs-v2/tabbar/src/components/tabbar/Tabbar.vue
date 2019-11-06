<template>
  <div>
    <div id="tab-bar">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Tabbar"
  }
</script>

<style>
  /*style中引用代码使用@import*/
  #tab-bar {
    display: flex;
    background-color: darkgray;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 -2px 1px #dadada;
  }
</style>
