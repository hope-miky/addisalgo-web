<template>
  <div class="body">
      <NavBar />

       <div class="d-flex" id="wrapper">

    <!-- Sidebar -->
    <div class=" border-right" id="sidebar-wrapper">
      <div class="sidebar-heading bg-light">Algorithms</div>
      <div class="list-group list-group-flush">
          <div v-for="item in Elements" :key="item.id" class="">
            <a v-on:click="sidebarClickHandler(item.id)" 
            v-bind:class="{'is-selected':item.selected}"
             class="list-group-item  stretched-link">
             {{item.name}}</a>
          </div>
        
      </div>
    </div>
    <!-- /#sidebar-wrapper -->

    <!-- Page Content -->
    <div id="page-content-wrapper">


      <div class="container-fluid">

           <template v-if="selectedId == 0">
               <h5 > Id number 0</h5>
           </template>

           <template v-else-if="selectedId == 1">
               <h5 > Id number 1</h5>
           </template>

           <template v-else>
               <h5 > Id number 2</h5>
           </template>


        </div>
    </div>







  </div>

    


    </div>
</template>

<script>
import NavBar from "../Navbar.vue";
export default {
    name: 'AlgorithmDashboard',
    components: {
        NavBar,
    },
    data() {
        return {
        selectedId: 0,
        Elements: [
            
            {
                id: 0,
                name: 'Sorting',
                selected: true,
            },
            {
                id: 1,
                name: 'Searching',
                selected: false,
            },
            {
                id: 2,
                name: 'Path Finding',
                selected: false,
            },


        ]
        }
    },

    methods: {
        sidebarClickHandler(id) {
            for (let i =0; i < this.Elements.length;i++){
                if (this.Elements[i].selected){
                    this.Elements[i].selected = false;
                }
            }
            this.Elements[id].selected = true;
            this.selectedId = id;
        },
    },
}
</script>

<style scoped>
.container {
    margin: 30px;
    border-color: black;
    border-width: 10px;
    border-radius: 10px;
    box-shadow: 15cm;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 25%;

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

#sidebar-wrapper {
  min-height: 100vh;
  margin-left: -15rem;
  -webkit-transition: margin .25s ease-out;
  -moz-transition: margin .25s ease-out;
  -o-transition: margin .25s ease-out;
  transition: margin .25s ease-out;
}

#sidebar-wrapper .sidebar-heading {
  padding: 0.875rem 1.25rem;
  font-size: 1.2rem;
}

#sidebar-wrapper .list-group {
  width: 15rem;

}


#page-content-wrapper {
  min-width: 100vw;
}


@media (min-width: 768px) {
  #sidebar-wrapper {
    margin-left: 0;
  }

  #page-content-wrapper {
    min-width: 0;
    width: 100%;
  }

 
}

.is-selected {
    background: #9cb2c9;
}

list.notcompleted {
    background: #ebf0f5;
}


</style>