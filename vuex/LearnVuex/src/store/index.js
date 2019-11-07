import Vue from 'vue'
import Vuex from 'vuex'

//1.安装插件
Vue.use(Vuex)

const moduleA ={
  state:{
    name:'cxk'
  },
  mutations:{
    updateName(state,playload){
      state.name=playload
    }
  },
  actions:{
    aUpdateName(context){
      //只会调自己模块里的mutation
      setTimeout(()=>{
        context.commit('updateName','wangwu')
      },1000)
    }
  },
  getters:{
    fullname(state){
      return state.name +'111'
    },
    fullname2(state,getters){
      return getters.fullname +'2222'
    },
    fullname3(state,getters,rootState){
      return getters.fullname2+'_'+rootState.counter
    }
  },
  modules:{

  }

}

//2.创建对象
const store = new Vuex.Store({
  //保存状态
  state:{
    counter:0
  },
  mutations:{
    //方法
    //增加
    increment(state){
      state.counter++
    },
    decrement(state){
      state.counter--
    }
  },
  actions:{
    //异步操作在actions中完成
    aUpdateInfo(context){
      setTimeout(()=>{
        context.commit('increment')
      },1000)
    }
  },
  getters:{
    powerCounter(state){
      return state.counter * state.counter
    }
  },
  modules:{
    a:moduleA
  }
})

export default store
