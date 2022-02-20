<template>
    <div>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand to="/inicio">Inicio</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    
      <b-navbar-nav>

        <b-nav-item to="/longitud">Conversor de longitud</b-nav-item>
        <b-nav-item to="/monedas">Conversor de monedas</b-nav-item>
        <b-nav-item to="/masa">Conversor de masa</b-nav-item>
        <b-nav-item to="/almacenamiento">Conversor de almacenamiento</b-nav-item>
        <b-nav-item to="/Tiempo">Conversor de tiempo</b-nav-item>



      </b-navbar-nav>

     
  </b-navbar>
  <br><br><br>
         <router-view/>
</div>
</template>
<script>
export default {
   name:'navegacion'
}
</script>