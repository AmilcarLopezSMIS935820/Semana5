<template>
  <div id="app">
    <navegacion/>
    <!--div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <menu/>
    </div>
    <router-view/-->
 
  </div>
</template>

<script>
import navegacion from './components/Navegacion.vue'
import inicio from './components/inicio.vue'
export default {
  components:{
    navegacion,
    inicio
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
