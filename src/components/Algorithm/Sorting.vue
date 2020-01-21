<template>
  <div>
      <div class=" container ">
         <button1 v-on:click.stop="randomNum()" class="btn btn-primary" style="float: right;">Random</button1>
      </div>
        <pure-vue-chart
            :points="this.points"
            :width="500"
            :height="300"
            :show-y-axis="false"
            :show-x-axis="true"
        />  
        </div>
</template>

<script>
//import PureChart from './chart/PureChart.vue'
import PureVueChart from 'pure-vue-chart';

export default {
    components: {
        //PureChart
        PureVueChart
    },
    name: 'Sorting',
    data() {
        return {
            source: [1,2,3,4,5,6,7,8,9],
        }
    },
    
    props: {
        points: { type: Array, 
        default: () => [5,8,9,6,3,4,1,5] 
        },
    },

    methods: {
         randomNum() {
            for(let i = 0; i < 10; i++){
                this.points[i] = Math.floor(Math.random() * (50 - 5 + 1)) + 5;
            }
            alert(this.points)
        },

    
    }
}
</script>

<style scoped>

</style>