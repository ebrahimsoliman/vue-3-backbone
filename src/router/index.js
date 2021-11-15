import {createRouter, createWebHistory} from "vue-router";
import Home from "../views/Home.vue";
import Bootstrap from "../views/Bootstrap";
import OwlCarousel from "../views/OwlCarousel";
import AnimateOnScroll from "../views/AnimateOnScroll";
import OdoMeterJs from "../views/OdoMeterJs";
import FullPageJs from "../views/FullPageJs";
import Apis from "../views/Apis";


const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/bootstrap",
        name: "Bootstrap",
        component: Bootstrap
    },
    {
        path: "/owl",
        name: "OwlCarousel",
        component: OwlCarousel
    },
    {
        path: "/aos",
        name: "AnimateOnScroll",
        component: AnimateOnScroll
    },
    {
        path: "/odometer",
        name: "OdoMeter",
        component: OdoMeterJs
    },
    {
        path: "/fullpage",
        name: "FullPage",
        component: FullPageJs
    },
    {
        path: "/api",
        name: "API",
        component: Apis
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
