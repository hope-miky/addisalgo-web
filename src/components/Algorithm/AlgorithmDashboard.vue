<template>
  <div class="body">
      <NavBar />

       <div class="d-flex" id="wrapper">

    <!-- Sidebar -->
    <div class="bg-light border-right" id="sidebar-wrapper">
      <div class="sidebar-heading">Algorithms</div>
      <div class="list-group list-group-flush">
          <div v-for="item in Elements" :key="item.id">
            <a v-bind:class="{'is-selected':item.selected}" class="list-group-item list-group-item-action">{{item.name}}</a>
          </div>
        
      </div>
    </div>
    <!-- /#sidebar-wrapper -->

    <!-- Page Content -->
    <div id="page-content-wrapper">


      <div class="container-fluid">
        <h1 class="mt-4">Simple Sidebar</h1>
        <p>The starting state of the menu will appear collapsed on smaller screens, and will appear non-collapsed on larger screens. When toggled using the button below, the menu will change.</p>
        <p>Make sure to keep all page content within the <code>#page-content-wrapper</code>. The top navbar is optional, and just for demonstration. Just create an element with the <code>#menu-toggle</code> ID which will toggle the menu when clicked.</p>
      </div>
    </div>
    <!-- /#page-content-wrapper -->

  </div>
  <!-- /#wrapper -->

    


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
        Elements: [
            
            {
                id: 2,
                name: 'Sorting',
                selected: true,
            },
            {
                id: 3,
                name: 'Searching',
                selected: false,
            },
            {
                id: 4,
                name: 'Path Finding',
                selected: false,
            },


        ]
        }
    }
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

#wrapper.toggled #sidebar-wrapper {
  margin-left: 0;
}

@media (min-width: 768px) {
  #sidebar-wrapper {
    margin-left: 0;
  }

  #page-content-wrapper {
    min-width: 0;
    width: 100%;
  }

  #wrapper.toggled #sidebar-wrapper {
    margin-left: -15rem;
  }
}

.is-selected {
    background: #9cb2c9;
}

list.notcompleted {
    background: #ebf0f5;
}

</style>