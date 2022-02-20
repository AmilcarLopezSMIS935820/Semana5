<template>
    <div id="root" class="container" style="width: 50%; background: Blue;">
        <h1>Conversor de Almacenamiento</h1>
        <hr>
        <input type="number" v-model="num1" class="form-control" style="width: 100%; text-align: center;"/>
            
        <div class="row">
            <div class="col-md-5" >
                <select name="desde" v-model="operation" class="complete">
                    <option value="0">KB</option>
                    <option value="1">MB</option>
                    <option value="2">GB</option>
                    <option value="3">TB</option>
                </select>
            </div>
            <div class="col-md-2">
                <p class="complete">AND</p>
            </div>
            <div class="col-md-5">
                <select name="hasta" class="complete" v-model="operation2">
                    <option value="0">KB</option>
                    <option value="1">MB</option>
                    <option value="2">GB</option>
                    <option value="3">TB</option>
                </select>
            </div>
        </div>
        <button @click="calculate">Convert</button><br>
        <label class="alert alert-primary" style='width: 100%;'>{{results}}</label>
    </div>
    
</template>
<script>
export default {
    name: 'almacenamiento',
    props:{
        title: String
    },
    data(){
        return{
            operation: '0',
            operation2: '0',
            results: '0',
            num1:0,
            num2:1
        }
    },
    methods:{
        calculate:function(){
               if (((this.operation)==0) && ((this.operation2)==1)) {
                    this.results = parseFloat(this.num1/1024)
               }
               
                    switch (this.operation) {
                    
                    case '1' :
                        this.results = this.num1/this.num2^2;
                        break;
                    case '2' :
                        this.results = this.num1*this.num2^2;
                        break;
                    case '3' :
                        this.results = this.num1/this.num2^3;
                        break;
                      case '4' :
                        this.results = this.num1*this.num2^3;
                        break;
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
</style>