<template>
  <div id="app">
    <div id="nav">
      <router-link to="/register" v-if="!estaActivo" >Sign Up |</router-link> 
      <router-link to="/" v-if="!estaActivo"> Login </router-link>
      <a @click="cerrarSesion()" v-if="estaActivo" href="">Log Out</a>
    </div>
    <router-view/>
  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex";
export default {
  computed:{
    ...mapGetters(['estaActivo']),
    ...mapActions(['cerrarSesion'])
  }
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
