<template>
  <div>
      <div class=" container ">
         <button1 v-on:click="randomNum()" class="btn btn-primary" style="float: right;">Random</button1>
      </div>
     <ChartView :chartdata="source" :options="options" v-bind:source="source"/>
  </div>
</template>

<script>
import ChartView from './ChartView.vue';

export default {
    components: {
        ChartView,
    },
    name: 'Sorting',
    data() {
        return {
            options: {
            responsive: true,
            maintainAspectRatio: false
            },
            source: {
            labels: ['Random Array values'],
            datasets: [
                {
                    backgroundColor: '#f87979',
                    data: [40]
                },
                {
                    backgroundColor: '#f87979',
                    data: [40]
                },
                {
                    backgroundColor: '#f87979',
                    data: [40]
                },
                {
                    backgroundColor: '#f87979',
                    data: [40]
                },
                {
                    backgroundColor: '#f87979',
                    data: [40]
                },
            ],
            },
        }
    },

    mounted () {
      this.randomNum()
    },

    methods: {
         randomNum() {
            for(let i = 0; i < 5; i++){
                this.source.datasets[i].data = [Math.floor(Math.random() * (50 - 5 + 1)) + 5];
            }
            //this.renderChart(this.source, this.options)
            //alert(this.source.datasets[1].data)
        },

    
    }
}
</script>

<style scoped>

</style>