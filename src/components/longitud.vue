<!--Josué Amílcar López Benítez SMIS935820-->
<template>
    <div id="root" class="container divroot">
        <h1 style="font-family: dayimport; padding-top: 20px;">Conversor de longitud</h1>
        <hr>
        <div class="container">
            <input type="number" v-model="num1" ref="dato"
                placeholder="Ingrese una cantidad a convertir"
                class="form-control" style="width: 100%; text-align: center;"/>
            
        <div class="row">
            <div class="col-md-5" >
                <select name="desde" v-model="operation" class="complete form-select" style="width: 100%;">
                    <option value="0">cm</option>
                    <option value="1">m</option>
                    <option value="2">km</option>
                    <option value="3">millas</option>
                </select>
            </div>
            <div class="col-md-2">
                <p class="complete" style="margin-top: 25px;">A</p>
            </div>
            <div class="col-md-5">
                <select name="hasta" class=" form-select complete" style="width: 100%;" v-model="operation2">
                    <option value="0">cm</option>
                    <option value="1">m</option>
                    <option value="2">km</option>
                    <option value="3">millas</option>
                </select>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <button @click="calculate" class="btn btn-primary btnmio">Convertir</button>
            </div>
            <div class="col">
                <button @click="clean" class="btn btn-danger btnmio">Limpiar</button><br>
            </div>
        </div>
         
        <label class="alert alert-primary" style='width: 100%;'>{{results}} {{tipo}}</label>
        </div>
    </div>
    
</template>
<script>
export default {
    name: 'longitud',
    props:{
        title: String,
        btn1: String,
        btn2: String
    },
    data(){
        return{
            operation: '0',
            operation2: '0',
            results: '',
            num1:'',
            tipo: ''
        }
    },
    methods:{
        clean: function(){
            this.results = '',
            this.num1 = '',
            this.$refs.dato.focus();
        },

        calculate:function(){
            //Asignación de unidades
                if ((this.operation2)==0){
                   this.tipo = ' cm'
                } 
                
                if((this.operation2)==1){
                    this.tipo = ' m'
                }

                if((this.operation2)==2){
                    this.tipo = ' km'
                }

                if((this.operation2)==3){
                    this.tipo = ' millas'
                }

            //Conversión cm
               if (((this.operation)==0) && ((this.operation2)==0)) {
                    this.results = parseFloat(this.num1)
               }
               
               if (((this.operation)==0) && ((this.operation2)==1)) {
                    this.results = parseFloat(this.num1/100)
               }

               if (((this.operation)==0) && ((this.operation2)==2)) {
                    this.results = parseFloat(this.num1/100000)
               }

               if (((this.operation)==0) && ((this.operation2)==3)) {
                    this.results = parseFloat(this.num1/160934)
               }
          
            //Conversión m
               if (((this.operation)==1) && ((this.operation2)==0)) {
                    this.results = parseFloat(this.num1*100)
               }
               
               if (((this.operation)==1) && ((this.operation2)==1)) {
                    this.results = parseFloat(this.num1)
               }

               if (((this.operation)==1) && ((this.operation2)==2)) {
                    this.results = parseFloat(this.num1/1000)
               }

               if (((this.operation)==1) && ((this.operation2)==3)) {
                    this.results = parseFloat(this.num1/1609.34)
               }
             
            //Conversión km
               if (((this.operation)==2) && ((this.operation2)==0)) {
                    this.results = parseFloat(this.num1*100000)
               }
               
               if (((this.operation)==2) && ((this.operation2)==1)) {
                    this.results = parseFloat(this.num1*1000)
               }

               if (((this.operation)==2) && ((this.operation2)==2)) {
                    this.results = parseFloat(this.num1)
               }

               if (((this.operation)==2) && ((this.operation2)==3)) {
                    this.results = parseFloat(this.num1/1.60934)
               }

            //Conversión millas
               if (((this.operation)==3) && ((this.operation2)==0)) {
                    this.results = parseFloat(this.num1*160934)
               }
               
               if (((this.operation)==3) && ((this.operation2)==1)) {
                    this.results = parseFloat(this.num1*1609.34)
               }

               if (((this.operation)==3) && ((this.operation2)==2)) {
                    this.results = parseFloat(this.num1*1.60934)
               }

               if (((this.operation)==3) && ((this.operation2)==3)) {
                    this.results = parseFloat(this.num1)
               }

          
    }
}
}
     
</script>

<style>
    
    @font-face{
        font-family: "dayimport";
        src: url('../components/DP.ttf');
    }

    .complete{
        width: 80%;
        text-align: center;
        margin-top: 15px;
    }

    .btnmio{
        width: 90%;
        font-weight: bold;
        border-radius: 35px;
        margin-top: 15px;
        margin-bottom: 25px;

    }

    .divroot{
        width: 50%;
        box-shadow: 0 0 15px rgba(6, 143, 167, 0.795);
        padding: 15px;
        border-radius: 5px;
    }

</style>