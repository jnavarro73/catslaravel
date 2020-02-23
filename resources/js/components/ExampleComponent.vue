<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card card-default">
                    <div class="card-header">Searchlist Component</div>

                    <div class="card-body">
                        <!-- filtro-->
                        <form action='' v-on:submit.prevent="filtrar()">
                            <div class="form-group">
                                <lavel for="busqueda">Filtrar por texto:</lavel>
                                <input type="text" class="form-control" name="filtro" v-model="palabra">
                            </div>
                            <button type="submit" class="btn btn-primary">Filtrar</button>   
                              
                          
                        </form>
                        <!-- listado -->
                        <div class="listado"></div>
                    </div>    
                    

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                palabra:''
            }
        },
        mounted() {
            console.log('Component mounted.')
        },
        methods:{
            filtrar(){
                alert(this.palabra);
            }
        }
    }
</script>
