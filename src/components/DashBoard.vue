<template>
  <div >
      <NavBar />

      <div class="container col-auto m-5 p-5">
          
    <div class="row">
            
        <div class="col-sm">
            <div class="container border p-0 shadow">
                
                <div class="card-img">
                    <img src="@/assets/logo.png">
                </div>
                    <div class="card-body">
                        <h5 >Algorithms</h5>
                            
                    </div>
                <div class="card-footer text-monospace">
                    Searching, Sorting, Stacks, Queues, PathFinding...
                    <a href="Algorithm" class=" btn stretched-link disabled" style="float: right;"></a>
                     
                </div>
            </div>
        </div>
        
            <div class="col-sm">
              <div class="container border p-0 shadow">
                   
               <div class="card-img">
                    <img src="@/assets/logo.png">
                </div>
                    <div class="card-body">
                        <h5>DataStructures</h5>
                            
                    </div>

                    <div class="card-footer text-monospace">
                        Bags, Arrays, Tupples, LinkedList, Graphs, Trees...
                           <a href="#" class=" btn stretched-link disabled" style="float: right;"></a>                     
                </div>
            </div>
        </div>
        <div class="col-sm">
           <div class="container border p-0 shadow">
               <div class="card">
                   
                   <div class="card-img">
                    <img src="@/assets/logo.png">
                </div>
                    <div class="card-body">
                        <h5 > Machine Learnings </h5>
                             
                    </div>
                    <div class="card-footer text-monospace">
                         KNN, Neural-Nets, CNN... 
                        <a href="#" class=" btn stretched-link disabled" style="float: right;"></a>
                </div>
               </div>
                
            </div>
        </div>
    </div>
    </div>

    </div>
</template>

<script>
import NavBar from "./Navbar";
export default {
    name: 'DashBoard',
    components: {
        NavBar,
    },
    methods: {
        cardOne(){

        }
    }
}
</script>

<style scoped>

.container {
    margin: 16px;
    border-color: black;
    border-width: 10px;
    border-radius: 25px;
    box-shadow: 15cm;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 25%;
    }
.card {
    border-radius: 25px;
    border: none;
}

.btn:focus,
.btn:active:focus,
.btn.active:focus,
.btn.focus,
.btn:active.focus,
.btn.active.focus {
    outline: none;
    box-shadow: none;
}




</style>