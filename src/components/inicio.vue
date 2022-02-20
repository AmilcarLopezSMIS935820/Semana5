<template>
<div class='container'>
    <div class="row" >
    
      <b-card title="Bryan Alexander Pineda Flores" img-src="https://matemovil.com/wp-content/uploads/2019/01/conversi%C3%B3n-de-unidades-de-masa-kilogramos-libras-2.jpg" img-alt="Image" img-top class="col-4">
       <b-card-text>
         Creo la calculadora que convierte las unidades de masa  como por ejemplo: Kilogramos a gramos o onzas a kilogramos
       </b-card-text>
       <template #footer>
        <b-button variant="outline-dark" to="/masa">Ir a calculadora</b-button>
       </template>
     </b-card>

     <b-card title="Josue Amilcar Lopez Benitez" img-src="https://matemovil.com/wp-content/uploads/2019/02/conversi%C3%B3n-de-unidades-de-longitud-1.jpg" img-alt="Image" img-top class="col-4">
       <b-card-text>
         Creo la calculadora que convierte las unidades de longitud  como por ejemplo: Kilometros a metros o centimetros a metros
       </b-card-text>
       <template #footer>
         <b-button variant="outline-dark" to="/longitud">Ir a calculadora</b-button>
       </template>
     </b-card>

     <b-card title="Alexis Geovany Martinez Gomez" img-src="https://www.actualidadgadget.com/wp-content/uploads/2013/11/conversor-de-monedas.jpg" img-alt="Image" img-top class="col-4">
       <b-card-text>
        Creo la calculadora que convierte las monedas   como por ejemplo: Dolar a Euro o PesoMX a Dolar
       </b-card-text>
       <template #footer>
        <b-button variant="outline-dark" to="/monedas">Ir a calculadora</b-button>
       </template>
     </b-card>

    
  

   
    </div>
    <br>
    <br>
    <div class="row">
        <div class="col-1"></div>
         <b-card title="William David Zelaya Salmeron" img-src="https://i.ytimg.com/vi/6eWYzJT378s/maxresdefault.jpg" img-alt="Image" img-top class="col-4">
       <b-card-text>
           Creo la calculadora que convierte las unidades de tiempo   como por ejemplo: Segundo a Minutos o Horas a Minutos
       
       </b-card-text>
       <template #footer>
        <b-button variant="outline-dark" to="/Tiempo">Ir a calculadora</b-button>
       </template>
     </b-card>
         <div class="col-1"></div>
     <b-card title="Andy Rodrigo Sorto Castillo" img-src="http://2.bp.blogspot.com/-aONcVv4zSFI/VTjK7orqu3I/AAAAAAAACLU/X9U6aYtbCu0/s1600/megas.jpg" img-alt="Image" img-top class="col-4" >
       <b-card-text>
          Creo la calculadora que convierte medidas de almacenamiento   como por ejemplo: KB a MB o GB a MB
       
       </b-card-text>
       <template #footer>
        <b-button variant="outline-dark" to="/almacenamiento">Ir a calculadora</b-button>
       </template>
     </b-card>
         <div class="col-1"></div>
    </div>

</div>

    
</template>

<script>
export default {
name:'inicio'
}
</script>