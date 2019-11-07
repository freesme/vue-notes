<template>
  <div id="app">
    <router-link to="HelloWorld">HelloWorld</router-link>
    <h1>全局状态</h1>
    <h2>{{$store.state.counter}}</h2>
    <router-view/>
    <h1>使用Mutation修改状态</h1>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <h2>异步操作 action</h2>
    <button @click="asyncAdd">+</button>
    <h1>Getters使用</h1>
    <h2>{{$store.getters.powerCounter}}</h2>
    <h2>modules中的内容-state</h2>
    <h2>{{$store.state.a.name}}</h2>
    <h2>修改modules-mutations</h2>
    <button @click="updateModule">修改名字</button>

    <h2>moudules -getters使用</h2>
    <h2>{{$store.getters.fullname}}</h2>
    <h2>{{$store.getters.fullname2}}</h2>
    <h2>{{$store.getters.fullname3}}</h2>
    <h2>moudules -actions</h2>
    <button @click="updateMName">修改名字异步操作</button>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    add(){
      this.$store.commit('increment')
    },
    sub(){
      this.$store.commit('decrement')
    },
    asyncAdd(){
      this.$store.dispatch('aUpdateInfo')
    },
    updateModule(){
      //commit直接提交就可以，mutations中的名字不要重复
      this.$store.commit('updateName',"zhengsan")
    },
    updateMName(){
      this.$store.dispatch('aUpdateName')
    }
  }
}
</script>

<style>
</style>
