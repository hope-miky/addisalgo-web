<template>
  <div>
       <pure-vue-chart
            :points="this.source"
            :width="500"
            :height="300"
            :show-y-axis="false"
            :show-x-axis="true"
        />
  </div>
</template>

<script>
import PureVueChart from 'pure-vue-chart';

export default {
    name: 'PureChart',
    components: {
        PureVueChart,
    },
    props: ['source'],
}
</script>

<style scoped>

</style>>

