

<script>
import { Bar, mixins } from 'vue-chartjs';

export default {
    name: 'ChartView',
    watch: {
        chartData () {
        this.$data._chart.update()
  }
    },
    mixins: [mixins.reactiveProp],
    components: {
        Bar,
        mixins
    },
    extends: Bar,
    props: ["source"],
  data: () => ({
    chartdata: {
      labels: ['February'],
      datasets: [],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  }),

  mounted () {
    this.renderChart(this.source, this.options)
  }
}
</script>

<style>

</style>