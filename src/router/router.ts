import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/search/:view",
        name: "search",
        component: () =>
            import(/* webpackChunkName: "SearchSwapi" */ "../views/SearchSwapi.vue"),
    },
    {
        path: "/search/:view/:id" ,
        name: "details",
        component: () =>
            import(/* webpackChunkName: "detail" */ "../views/Detail.vue"),
        props: true
    },

];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
