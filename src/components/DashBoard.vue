<template>
  <div id="app">
      <NavBar />

      <div class="container col-auto m-5 p-5">
          
    <div class="row">
            
        <div class="col-sm">
            <div class="container border p-5 shadow">
                <div class="card-img">
                    <img src="@/assets/logo.png">
                </div>
                    <div class="card-body">
                            Algorithms
                    </div>
                    
            </div>
        </div>
        
            <div class="col-sm">
              <div class="container border p-5 shadow">
               <div class="card-img">
                    <img src="@/assets/logo.png">
                </div>
                    <div class="card-body">
                            Algorithms
                    </div>
            </div>
        </div>
        <div class="col-sm">
           <div class="container border p-5 shadow">
                <div class="card-img">
                    <img src="@/assets/logo.png">
                </div>
                    <div class="card-body">
                            Algorithms
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
    box-shadow: 10cm;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 25%;
    }

</style>