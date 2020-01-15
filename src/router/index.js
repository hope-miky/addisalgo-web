import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../components/DashBoard.vue"
import ALgorithm from "../components/Algorithm/AlgorithmDashboard.vue"

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "home",
        component: Dashboard,
        meta: { transition: 'fade-in-right' },
    },

    {
        path: "/Algorithm",
        name: "Algorithm",
        component: ALgorithm,
        meta: { transition: 'fade-in-right' },
    },

    /*  {
         path: "/about",
         name: "about", */
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    // import ( /* webpackChunkName: "about" */ "../views/About.vue")
    //}

];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;