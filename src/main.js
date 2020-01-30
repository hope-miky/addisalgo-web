import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


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
Vue.use(router)
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')