<template>
<div id="root" class="container moneda" >
        <h1>Conversor de monedas</h1>
        <hr>
        <input type="number" v-model="num1" class="form-control introducc" style="width: 100%; text-align: center;"/>
            
        <div class="row">
            <div class="col-md-5" >
                <select name="desde" v-model="operation" class="complete">
                    <option value="0">dollar</option>
                    <option value="1">euro</option>
                    <option value="2">peso MX</option>
                </select>
            </div>
            <div class="col-md-2">
                <p class="complete" style="position: center">A</p>
            </div>
            <div class="col-md-5">
                <select name="hasta" class="complete" v-model="operation2">
                    <option value="0">dollar</option>
                    <option value="1">euro</option>
                    <option value="2">peso MX</option>
                </select>
            </div>
        </div>
        <button @click="calculate" class="btn btn-outline-dark" style="position: center">convertir</button><br>
        <label class="alert alert-success result" style='width: 100%;'>{{results}}</label>
    </div>
    
</template>

<script>
export default {
    name: 'monedas',
 props:{
        title: String
    },
    data(){
        return{
            operation: '0',
            operation2: '0',
            results: '0',
        }
    },
    methods:{
        calculate:function(){
            //convertir dolares a las demas monedas 
               if (((this.operation)==0) && ((this.operation2)==1)) {
                    this.results = parseFloat(this.num1* (0.88))
               }else if(((this.operation)==0) && ((this.operation2)==2)){
                   this.results = parseFloat(this.num1 *(20.54))
    //convertir euros a las demas monedas
               }else if(((this.operation)==1) && ((this.operation2)==0)){
                   this.results = parseFloat(this.num1 * 1.14)

               }else if(((this.operation)==1) && ((this.operation2)==2)){
                   this.results = parseFloat(this.num1 * 23.31)
            //convertir pesos a las demas monedas
               }else if(((this.operation)==2) && ((this.operation2)==0)){
                   this.results = parseFloat(this.num1 * 0.049)

               }else if(((this.operation)==2) && ((this.operation2)==1)){
                   this.results = parseFloat(this.num1 * 0.043)

               }
               
               
    }
}
}
     
</script>

<style>
    .complete{
        width: 80%;
        text-align: center;
        margin-top: 10px;
    }
    label{
        margin-top: 5px;
    }

    .moneda{
        width: 50%;
        background-color:#33A7FB;
        border-radius: 20px
    }

    select{
        border-radius: 20px;
        height: 30px;
    }
    .introducc{
        border-radius: 30px;
    }
    .result{
        border-radius: 30px;
    }

</style>