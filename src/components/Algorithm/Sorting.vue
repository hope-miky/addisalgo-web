<template>
  <div class="small">
    <button @click="fillData()" style="float: right;" class="btn btn-info">Randomize Data</button>
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
              maxBarThickness: 5,
              hoverBackgroundColor: '#a7460f',
              data: [this.getRandomInt()]
            }, 
          ]
        };

        for (let i =0; i< 80; i++){
          this.datacollection.datasets.push({
            backgroundColor: '#007079',
            maxBarThickness: 5,
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
    max-width: 600px;
    margin:  50px auto;
}
</style>
