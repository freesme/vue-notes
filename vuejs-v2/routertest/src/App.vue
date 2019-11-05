<template>
  <div id="app">
    <img src="./assets/logo.png">

    <router-link to="/HelloWorld">你好</router-link>
    <router-link :to="'/Profile/'+id">Profile</router-link>
<!--    路由传值-->
    <router-link :to="{path:'/User',query:{name:name}}">User</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      id:'123213',
      name:'zsdad'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
