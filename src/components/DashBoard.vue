<template>
  <div>
      <NavBar />

      <div class="container">
    <div class="row">
        <a class="aFordiv" href="Algorithm">
        <div class="col-sm">
            <div class="container border p-5 shadow">
                this is one
            </div>
        </div>
        </a>
            <div class="col-sm">
              <div class="container border p-5 shadow">
                this is two
            </div>
        </div>
        <div class="col-sm">
           <div class="container border p-5 shadow">
                this is three
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
    }
</style>