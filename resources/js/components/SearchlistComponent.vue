<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card card-default">
                   <!-- <div class="card-header">Searchlist Component</div>-->

                    <div class="card-body">
                        <!-- filtro-->
                        <form action='' v-on:submit.prevent="filtrar()">
                            <div class="form-group">
                                <p>Filtrar por texto:</p>
                                <input type="text" class="form-control" name="filtro" v-model="palabra">
                            </div>
                            <button type="submit" class="btn btn-primary" v-on:click="getfacts">Filtrar</button>   
                              
                          
                        </form>
                        <!-- listado -->
                        <!--<div class="listado"></div>-->
                        <!--<factcat-component></factcat-component>-->
                           <div class="panel panel-default">
                            <table class="table table-borderer">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Fact</th>
                                        <th>upvotes</th>    
                                    </tr>
                                </thead>    
                                <tbody>
                                    <table>
                                        <tr v-for="item in searchFacts" :key="item._id">
                                            <td>{{item._id}}</td>
                                            <td>{{item.text}}</td>
                                            <td>{{item.upvotes}}</td>
                                        </tr>
                                    </table>
                                </tbody>
                            </table>

                            <nav>
                                <ul class="pagination">
                                    <li v-if="pagination.current_page > 1">
                                        <a href="#" click.prevent="changePage(pagination.current_page -1)">
                                            <span>Atras</span>
                                        </a>
                                    </li>
                                    <li v-for="page in pagesNumber" v-bind:class="[ page == isActived ? 'active': '']">
                                        <a href="">
                                            <span> {{page}} </span>
                                        </a>
                                    </li>    
                                    <li v-if="pagination.current_page <  pagination.last_page">
                                        <a href="#" click.prevent="changePage(pagination.current_page +1)">
                                            <span>Siguiente</span>
                                        </a>
                                    </li>
                                   </ul>        
                            </nav>    


                            </div>
                        </div>
                    </div>    
                    

                </div>
            </div>
           
        </div>

</template>

<script>
    export default {
        data(){
             
            return {
                   palabra:'',
                   item: {
                        _id: '',
                        text: '',
                        user: null,
                        upvotes: '',
                        userUpvoted: true
                    } ,
                    
                    pagination: {
                        total:10,
                        current_page:1,
                        last_page:4,
                        from:1,
                        to:3
                    },
                  
                   factcats : [{"_id":"58e008ad0aac31001185ed0c","text":"The frequency of a domestic cat's purr is the same at which muscles and bones repair themselves.","type":"cat","user":{"_id":"58e007480aac31001185ecef","name":{"first":"Kasimir","last":"Schulz"}},"upvotes":8,"userUpvoted":null},{"_id":"5b199196ce456e001424256a","text":"Cats can distinguish different flavors in water.","type":"cat","user":{"_id":"5a9ac18c7478810ea6c06381","name":{"first":"Alex","last":"Wohlbruck"}},"upvotes":6,"userUpvoted":null},{"_id":"5b1b411d841d9700146158d9","text":"The Egyptian Mau’s name is derived from the Middle Egyptian word mjw, which means cat. But contrary to its name, it’s unclear whether the modern Egyptian Mau actually originated in Egypt.","type":"cat","user":{"_id":"5a9ac18c7478810ea6c06381","name":{"first":"Alex","last":"Wohlbruck"}},"upvotes":5,"userUpvoted":null},{"_id":"5b4912c60508220014ccfe99","text":"Cats aren’t the only animals that purr — squirrels, lemurs, elephants, and even gorillas purr too.","type":"cat","user":{"_id":"5a9ac18c7478810ea6c06381","name":{"first":"Alex","last":"Wohlbruck"}},"upvotes":5,"userUpvoted":null},{"_id":"5b4911940508220014ccfe94","text":"By the time a cat is 9 years old, it will only have been awake for three years of its life.","type":"cat","user":{"_id":"5a9ac18c7478810ea6c06381","name":{"first":"Alex","last":"Wohlbruck"}},"upvotes":5,"userUpvoted":null},{"_id":"59a60b8e6acf530020f3586e","text":"Cat owners are 17% more likely to have a graduate degree than non cat owners.","type":"cat","user":{"_id":"5a9ac18c7478810ea6c06381","name":{"first":"Alex","last":"Wohlbruck"}},"upvotes":5,"userUpvoted":null},{"_id":"599f89639a11040c4a163440","text":"Here is a video of some cats in zero gravity. youtu.be/O9XtK6R1QAk","type":"cat","user":{"_id":"5a9ac18c7478810ea6c06381","name":{"first":"Alex","last":"Wohlbruck"}},"upvotes":5,"userUpvoted":null},{"_id":"59cd7a97c828120020f7d3a1","text":"Since cats treat us like cats and depend on us for things like food, water, and opening the door to let them out, they do recognize, that we are in some way in charge — the “big cat” in the shared territory. As territorial animals, our cats are constantly wondering why we’re not doing other cat things that the big cat would normally do in their territory. In fact, the “let me in, let me out, let me in” phenomenon is a good example. The bigger cat ostensibly rules the territory and therefore should be the one patrolling and marking it with pee so other cats stay away. But since humans don’t do this, indoor-outdoor cats reluctantly take on the role themselves. The apparent neuroticism of cats wanting to go outside every five minutes only to be let right back in is funny to us because it seems so silly and unnecessary. But to the cats, it’s very necessary (and frustrating) to cover for their dumb pals.","type":"cat","user":{"_id":"5a9ac18c7478810ea6c06381","name":{"first":"Alex","last":"Wohlbruck"}},"upvotes":2,"userUpvoted":null},{"_id":"58cafac6ffae36001108d586","text":"Cats have fur","type":"cat","user":{"_id":"58c86fe52341fc0011d7b151","name":{"first":"Alex","last":"Simon"}},"upvotes":2,"userUpvoted":null},{"_id":"58e007cc0aac31001185ecf5","text":"Cats are the most popular pet in the United States: There are 88 million pet cats and 74 million dogs.","type":"cat","user":{"_id":"58e007480aac31001185ecef","name":{"first":"Kasimir","last":"Schulz"}},"upvotes":2,"userUpvoted":null}]  ,
                 
            };
        },
        mounted() {
            
            this.getfacts();
     
        },
        methods:{

                filtrar(){
                    alert(this.palabra);
                },

                getfacts(){
         
                     // axios.defaults.headers.common['Access-Control-Allow-Origin']='*'; 
                     // la api no tiene montado sistema de paginado para  
                    axios.get('https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=50', this.data, { 
                   
                     // crossdomain: true 
                         headers: {
                                  'Access-Control-Allow-Origin': '*'
                                }
                          
              
                                }).then(response => {
                                    console.log('response');
                                             //  this.catfacts = response.data;
                                      }).catch(error => {
                                        console.log('error');
                                        console.log(error);
                                        
                                      });
                }
        },
        computed:{
            //Filter
            searchFacts: function (){
                return this.factcats.filter((item)=>item.text.includes(this.palabra));
             
            },
            //Pagination functions
            isActived: function (){
                return this.pagination.current_page;
            },
            pagesNumber:function(){
                if(!this.pagination.to){
                    
                    return [];
                }
                var from= this.pagination.current_page -this.offset;
                if(from <1) {
                    from = 1;
                }
                var to = from + (2*this.offset);
                if(to>= this.pagination_last_page){
                    to = this.pagination_last_page;
                }
                var pagesArray=[];
                while(from <= to){
                    pagesArray.push(from);
                    from ++;
                }
                return pagesArray;
            },
            changePage : function(){
                this.pagination.current_page = page;
                this.getfactsPortion(page);
            },
            getfactsPortion: function(){

                return this.factcats.slice(page*5,page*5+4);
            }

        }


   
     
        
}
</script>
