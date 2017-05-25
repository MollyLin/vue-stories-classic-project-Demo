<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>
      <button><router-link :to="{ name:'home'}" active-class="molly-active-class" exact>Home</router-link></button>
      <button><router-link :to="{ name:'login'}">go to login</router-link></button>
      <button><router-link :to="{ name:'stories.all'}">Stories</router-link></button>
    </p>
    <transition enter-active-class="animated rollIn">
      <router-view></router-view>
    </transition>
    <!--<hello></hello>
    <login></login>
    <register></register>
    <stories></stories>-->
  </div>
</template>

<script>
import Login from './components/Login.vue'
import Hello from './components/Hello.vue'
import Register from './components/Register.vue'
import Stories from './components/Stories.vue'
import StoriesEdit from './components/StoriesEdit.vue'

export default {
  name: 'app',
  components: {
    Hello,
    Login,
    Register,
    Stories,
    StoriesEdit
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
  .router-link-active {
    color: green;
  }
</style>
