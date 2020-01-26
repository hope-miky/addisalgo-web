<template>
  <div class="small">
      
      <div  class="" style="float: left;">
         
        <label class="mr-sm-2 sr-only dropdown-header" >Preference</label>
            <select  class="custom-select mr-sm-2">
                <option value="" selected disabled>Select Sorting type</option>
                <div class="dropdown-divider"></div>
                <option value="Bubble" >Bubble Sort</option>
                <option value="Students">Linear Sort</option>
               
            </select>
    </div>

     <div class="row col-auto" style="float: right;">
         

    <div  class=" col-auto" style="float: center; max-width: 100px;">
        <label class="mr-sm-2 sr-only" >Preference</label>
            <select v-model="numberOfValues" class="custom-select mr-sm-2">
                <option value="" disabled>Number of Samples</option>
                <div class="dropdown-divider"></div>
                <option value="50">50</option>
                <option value="100" selected>100</option>
                <option value="150">150</option>
                <option value="200">200</option>
                <option value="250">250</option>
                <option value="300">300</option>
               
            </select>
    </div>
      
    <button @click="fillData()" style="float: right;" class="btn btn-info">Randomize Data</button>

     </div>
      
    <line-chart :chart-data="datacollection"
      :options="options"
    ></line-chart>
  </div>
</template>

<script>
import LineChart from "../LineChart.js";
export default {
  name: 'Sorting',
    components: {
      LineChart
    },
    data () {

      return {
          numberOfValues: 100,
        datacollection:null,
        options: {
            maintainAspectRatio: false,
                layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    },
            
                },
              legend: {
                  display: false
              },
              scales: {
                  
              xAxes: [{
                  gridLines: {
                      offsetGridLines: true,
                      offset: true,
                    color: "rgba(0, 0, 0, 0)",
                  },
                  ticks: {         
                                     
                  },
              }],
              yAxes: [{
                  gridLines: {
                color: "rgba(0, 0, 0, 0)",
            },
                ticks: {
                    beginAtZero:true,
                    suggestedMin: 0,
                    suggestedMax: 50,
                    display: false,
                }
            }]
          },
              tooltips: {
                  callbacks: {
                    label: function(tooltipItem) {
                            return tooltipItem.yLabel;
                    }
                  }
              }
          }
      }
    },
    mounted () {
      this.fillData()
    },
    methods: {
      fillData () {
        
        this.datacollection = {
          datasets: [
            {
              backgroundColor: '#007079',
              hoverBackgroundColor: '#a7460f',
              data: [this.getRandomInt()]
            }, 
          ]
        };

        for (let i =0; i< this.numberOfValues; i++){
          this.datacollection.datasets.push({
            backgroundColor: '#007079',
            
            hoverBackgroundColor: '#a7460f',
            data: [this.getRandomInt()]
          })
        }
        

       
      },
      getRandomInt () {
        return Math.floor(Math.random() * (55 - 10 + 1)) + 10
      }
    }
  }
</script>

<style>

.small {
    min-width: 100px;
    min-height: 150px;
    margin:  50px auto;
}
</style>
