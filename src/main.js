import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import VuePageTransition from 'vue-page-transition';
import PureVueChart from 'pure-vue-chart';

//import { Bar, mixins } from 'vue-chartjs'
//const { reactiveProp } = mixins
//var data, options;

/* export default {
    extends: Bar,
    mixins: [reactiveProp],
    props: ['options'],
    mounted() {
        this.renderChart(data, options)
    }
}
 */
Vue.use(PureVueChart)
Vue.use(router)
Vue.use(VuePageTransition)
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')