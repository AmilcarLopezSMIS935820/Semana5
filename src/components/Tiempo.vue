<template>
    <div id="root" class="container" style="width: 50%; background: red;">
        <h1>Conversor de tiempo</h1>
        <hr>
        <input type="number" v-model="num1" class="form-control" style="width: 100%; text-align: center;"/>
            
        <div class="row">
            <div class="col-md-5" >
                <select name="desde" v-model="operation" class="complete">
                    <option value="0">Horas</option>
                    <option value="1">Minutos</option>
                    <option value="2">Segundos</option>
                </select>
            </div>
            <div class="col-md-2">
                <p class="complete">A</p>
            </div>
            <div class="col-md-5">
                <select name="hasta" class="complete" v-model="operation2">
                    <option value="0">Horas</option>
                    <option value="1">Minutos</option>
                    <option value="2">Segundos</option>
                </select>
            </div>
        </div>
        <button @click="calculate">==</button><br>
        <label class="alert alert-primary" style='width: 100%;'>{{results}}</label>
    </div>
    
</template>
<script>
export default {
    name: 'Tiempo',
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
                    this.results = parseFloat(this.num1*60)

                } else if (((this.operation)==0) && ((this.operation2)==2)) {
                    this.results = parseFloat(this.num1*3600)
                } else if (((this.operation)==1) && ((this.operation2)==0)) {
                    this.results = parseFloat(this.num1/60)
                } else if (((this.operation)==1) && ((this.operation2)==2)) {
                    this.results = parseFloat(this.num1*60)
                } else if (((this.operation)==2) && ((this.operation2)==0)) {
                    this.results = parseFloat(this.num1/3600)
                } else if (((this.operation)==2) && ((this.operation2)==1)) {
                    this.results = parseFloat(this.num1/60)
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