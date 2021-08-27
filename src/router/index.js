import {
  createRouter,
  createWebHistory
}                      from "vue-router";
import Home            from "../views/Home.vue";
import Bootstrap       from "../views/Bootstrap";
import OwlCarousel     from "../views/OwlCarousel";
import AnimateOnScroll from "../views/AnimateOnScroll";
import OdoMeterJs      from "../views/OdoMeterJs";

const routes = [
  {
    path     : "/",
    name     : "Home",
    component: Home
  },
  {
    path     : "/bootstrap",
    name     : "Bootstrap",
    component: Bootstrap
  },
  {
    path     : "/owl",
    name     : "OwlCarousel",
    component: OwlCarousel
  },
  {
    path     : "/aos",
    name     : "AnimateOnScroll",
    component: AnimateOnScroll
  },
  {
    path     : "/odometer",
    name     : "OdoMeter",
    component: OdoMeterJs
  }
];

const router = createRouter({
                              history: createWebHistory(process.env.BASE_URL),
                              routes
                            });

export default router;
