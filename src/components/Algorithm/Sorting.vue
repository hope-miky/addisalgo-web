<template>
  <div>
      <div class=" container ">
         <button1 v-on:click="randomNum()" class="btn btn-primary" style="float: right;">Random</button1>
      </div>
      <div v-for="num in source" :key="source[num]" class=" p-1">
          <p>{{num}},</p>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Sorting',
    data() {
        return {
            source: [],
        }
    },

    methods: {
        randomNum() {
            for(let i = 0; i < 100; i++){
                this.source[i] = Math.floor(Math.random() * (100 - 1 + 1) ) + 1;
            }
            alert(this.source)
        }
    }
}
</script>

<style scoped>

</style>